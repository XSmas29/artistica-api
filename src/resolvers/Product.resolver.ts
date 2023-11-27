import { Product } from '@entity/Product.entity'
import { filterProducts, pagination, sort } from '@utils/params'
import { Arg, Query, Resolver } from 'type-graphql'

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  async products(
    @Arg('filter') filter: filterProducts,
    @Arg('sort') sort: sort,
    @Arg('pagination') pagination: pagination,
  ): Promise<Product[]> {
    const productsQuery = Product.createQueryBuilder('products')
    
    filter.price_min && productsQuery.andWhere('products.price >= :price_min', { price_min: filter.price_min })
    filter.price_max && productsQuery.andWhere('products.price <= :price_max', { price_max: filter.price_max })
    filter.category_id && productsQuery.andWhere('products.category = :category_id', { category_id: filter.category_id })
    filter.material_id && productsQuery.andWhere('products.material = :material_id', { material_id: filter.material_id })
    filter.search && productsQuery.andWhere('products.name LIKE :search', { search: `%${filter.search}%` })
    
    productsQuery.orderBy(`products.${sort.field}`, sort.sort)
    productsQuery.limit(pagination.limit)
    productsQuery.offset(pagination.offset * pagination.limit)
    
    const products = await productsQuery.getMany()

    return products
  }
}