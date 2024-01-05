import { Arg, Query, Resolver } from 'type-graphql'
import { Category } from '@entity/Category.entity'
import { CategoryList, filterCategories } from '@utils/category.type'
import { pagination } from '@utils/params'

@Resolver(Category)
export class CategoryResolver {

  @Query(() => CategoryList)
  async categories(
    @Arg('filter', { nullable: true }) filter?: filterCategories,
    @Arg('pagination', { nullable: true }) pagination?: pagination,
  ): Promise<CategoryList> {
    const categoriesQuery = Category.createQueryBuilder('cat')
    
    if (filter?.search) {
      categoriesQuery.where('cat.name LIKE :search', { search: `%${filter.search}%` })
    }

  if (pagination) {
    categoriesQuery.limit(pagination.limit)
    categoriesQuery.offset((pagination.page - 1) * pagination.limit)
  }
    
    const categories = await categoriesQuery.getManyAndCount()

    return {
      count: categories[1],
      categories: categories[0],
    }
  }
}