import { Product } from '@entity/Product.entity'
import { pagination, sort } from '@utils/params'
import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import * as env from 'env-var'
import { Image } from '@entity/Image.entity'
import { Loader } from '@xsmas29/type-graphql-dataloader'
import { In } from 'typeorm'
import { groupBy } from 'lodash'
import DataLoader from 'dataloader'
import { filterProducts, ProductList } from '@utils/product.type'
import { Variant } from '@entity/Variant.entity'

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
}