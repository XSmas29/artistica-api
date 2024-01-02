import { Product } from '@entity/Product.entity'
import { AddProductData, pagination, sort } from '@utils/params'
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import * as env from 'env-var'
import { Image } from '@entity/Image.entity'
import { Loader } from '@xsmas29/type-graphql-dataloader'
import { In } from 'typeorm'
import { groupBy } from 'lodash'
import DataLoader from 'dataloader'
import { filterProducts, ProductList } from '@utils/product.type'
import { Variant } from '@entity/Variant.entity'
import { ServerResponse } from '@utils/types'
import { createSlug, fillVariantValues } from '@utils/format'
import { Attribute } from '@entity/Attribute.entity'
import { AttributeOption } from '@entity/AttributeOption.entity'
import { VariantValue } from '@entity/VariantValue.entity'
import { checkUniqueSKU } from '@utils/composables'
import { DuplicateEntryError } from '@utils/errors'
import { uploadFile } from '@utils/upload'
import { parse } from 'path'

@Resolver(Product)
export class ProductResolver {
  @FieldResolver()
  @Loader<number, Image[]>(async ids => {
    const images = await Image.find({
      where: { product: { id: In([...ids]) } },
      relations: ['product'],
    })
    const base_url = env.get('BASE_URL').required().asString()
    images.forEach(image => image.path = `${base_url}/products/${image.product!.id.toString()}/${image.path}`)
    const imagesById = groupBy(images, 'product.id')

    return ids.map(id => imagesById[id] ?? [])
  })
  images(@Root() root: Product) {
    return (dataloader: DataLoader<number, Image[]>) =>
      dataloader.load(root.id)
  }

  @Query(() => ProductList)
  async products(
    @Arg('filter') filter: filterProducts,
    @Arg('sort') sort: sort,
    @Arg('pagination') pagination: pagination,
  ): Promise<ProductList> {
    const productsQuery = Product.createQueryBuilder('prod')

    const variant = Variant.createQueryBuilder('var')
    const min_price = await variant.clone().orderBy('var.price', 'ASC').getOneOrFail()
    const max_price = await variant.clone().orderBy('var.price', 'DESC').getOneOrFail()

    filter.price_min && productsQuery.andWhere(qb => {
      const subQuery = qb.subQuery()
        .select('count(*)')
        .from(Variant, 'var')
        .where('var.price >= :price_min', { price_min: filter.price_min })
        .andWhere('var.product = prod.id')
        .getQuery()
        
        return subQuery + ' > 0'
    })
    filter.price_max && productsQuery.andWhere(qb => {
      const subQuery = qb.subQuery()
        .select('count(*)')
        .from(Variant, 'var')
        .where('var.price <= :price_max', { price_max: filter.price_max })
        .andWhere('var.product = prod.id')
        .getQuery()
        
        return subQuery + ' > 0'
    })
    filter.category_ids && filter.category_ids.length > 0 && productsQuery.andWhere('prod.category IN (:c_ids)', { c_ids: filter.category_ids })
    filter.material_ids && filter.material_ids.length > 0 && productsQuery.andWhere('prod.material IN (:m_ids)', { m_ids: filter.material_ids })
    filter.search && productsQuery.andWhere('prod.name LIKE :search', { search: `%${filter.search}%` })

    if (sort.field === 'price') {
      productsQuery.addSelect(subQuery => {
        return subQuery
          .select('MIN(var.price)')
          .from(Variant, 'var')
          .where('var.product = prod.id')
      }, 'min_price')
      productsQuery.addSelect(subQuery => {
        return subQuery
          .select('MAX(var.price)')
          .from(Variant, 'var')
          .where('var.product = prod.id')
      }, 'max_price')
      productsQuery.orderBy(`${sort.sort === 'ASC' ? 'min_price' : 'max_price'}`, sort.sort)
    }
    else {
      productsQuery.orderBy(`prod.${sort.field}`, sort.sort)
    }

    productsQuery.limit(pagination.limit)
    productsQuery.offset((pagination.page - 1) * pagination.limit)

    const products = await productsQuery.getManyAndCount()
    
    return {
      count: products[1],
      products: products[0],
      price_min:  min_price.price,
      price_max:  max_price.price,
    }
  }
  
  @Query(() => Product)
  async productDetail(
    @Arg('id') id: number,
  ): Promise<Product> {
    const product = await Product.createQueryBuilder('prod')
      .where('prod.id = :id', { id })
      .getOneOrFail()
    
    return product
  }

  @Mutation(() => ServerResponse)
  async addProduct(
    @Arg('data') data: AddProductData,
  ): Promise<ServerResponse> {
    const {product, attributes, variants } = data
    
    const isSKUUnique = await checkUniqueSKU(variants.map(variant => variant.sku))

    if (!isSKUUnique) {
      throw new DuplicateEntryError('SKU tidak boleh sama / sudah digunakan sebelumnya')
    }

    const newProduct = Product.create({
      name: product.name,
      description: product.description,
      slug: createSlug(product.name),
      category: { id: product.category_id },
      material: { id: product.material_id },
      single_variant: attributes.length === 0,
    })
    const productData = await Product.save(newProduct)

    product.images.forEach(async image => {
      const data = await image
      const { ext } = parse(data.filename)
      const path = `img_${productData.id}_${Date.now().toString()}${ext}`

      await uploadFile(image, `products/${productData.id}`, path)
      
      const newImage = Image.create({
        path: path,
        product: productData,
      })

      await Image.save(newImage)
    })

    const newAttributes = attributes.map(async attr => {
      const attribute = Attribute.create({
        name: attr.name,
        product: productData,
      })

      const attributeData = await Attribute.save(attribute)
      const options = attr.values.map(value => {
        return AttributeOption.create({
          name: value,
          attribute: attributeData
        })
      })
      
      const optionsData = await AttributeOption.save(options)
      
      return {...attributeData, options: optionsData}
    })
    const attributeData = await Promise.all(newAttributes)

    // console.log(attributeData.map(attr => attr.options))

    const newVariants = variants.map(async variant => {
      const newVariant = Variant.create({
        price: variant.price,
        stock: variant.stock,
        sku: variant.sku,
        product: productData,
      })

      const variantData = await Variant.save(newVariant)
      
      //upload variant image
      if (variant.image) {
        const data = await variant.image
        const { ext } = parse(data.filename)
        const path = `img_${variantData.id}_${Date.now().toString()}${ext}`

        await uploadFile(variant.image, `variants/${productData.id}`, path)
        
        const newImage = Image.create({
          path: path,
          variant: variantData,
        })

        await Image.save(newImage)
      }

      return variantData
    })

    const result: number[][] = []
    fillVariantValues(attributeData as Attribute[], 0, [], result)

    const variantData = await Promise.all(newVariants)

    // console.log(variantData)
    console.log(attributeData)
    console.log(attributeData.length)
    const newValues = variantData.map(async (variant, index) => {
      // for (const [i, attr] of attributeData.entries()) {
      for (let i = 0; i < attributeData.length; i++) {
        console.log('index attr: ', i)
        console.log('index vars: ', index)
        console.log(attributeData[i].id)

        // console.log({
        //   variant: await Variant.findOneByOrFail({ id: variant.id }),
        //   attribute: await Attribute.findOneByOrFail({ id: attr.id }),
        //   option: await AttributeOption.findOneByOrFail({ id: result[index][i] }),
        // })
        const variantValue = VariantValue.create({
          variant: await Variant.findOneByOrFail({ id: variant.id }),
          attribute: await Attribute.findOneByOrFail({ id: attributeData[i].id }),
          option: await AttributeOption.findOneByOrFail({ id: result[index][i] }),
        })

        // console.log(variantValue)
        const data = await VariantValue.save(variantValue)
        console.log('vv id: ', data.id)
        
        // return data
      }
    })
    const valueData = await Promise.all(newValues)

    // console.log(valueData)

    console.log(result)
      
    return {
      message: 'Produk berhasil ditambahkan',
      success: true,

      // data: product
    }
  }

  @Mutation(() => ServerResponse)
  async deleteProduct(
    @Arg('id') id: number,
  ): Promise<ServerResponse> {
    //delete product
    const product = await Product.findOneByOrFail({ id })
    await Product.softRemove(product)

    //delete product attributes
    const attributes = await Attribute.createQueryBuilder('attr')
      .where('attr.product = :id', { id })
      .getMany()
    await Attribute.softRemove(attributes)

    //delete product attribute options
    const options = await AttributeOption.createQueryBuilder('opt')
      .where('opt.attribute IN (:...ids)', { ids: attributes.map(attr => attr.id) })
      .getMany()
    await AttributeOption.softRemove(options)

    //delete product variants
    const variants = await Variant.createQueryBuilder('var')
      .where('var.product = :id', { id })
      .getMany()
    await Variant.softRemove(variants)

    //delete product variant values
    const values = await VariantValue.createQueryBuilder('val')
      .where('val.variant IN (:...ids)', { ids: variants.map(variant => variant.id) })
      .getMany()
    await VariantValue.softRemove(values)

    return {
      message: 'Produk berhasil dihapus',
      success: true,
    }
  }
}