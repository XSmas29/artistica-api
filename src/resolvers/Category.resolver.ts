import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Category } from '@entity/Category.entity'
import { CategoryList, filterCategories } from '@utils/category.type'
import { CategoryData, pagination } from '@utils/params'
import { ServerResponse } from '@utils/types'
import { DuplicateEntryError } from '@utils/errors'

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

  @Mutation(() => ServerResponse)
  async addCategory(
    @Arg('data') data: CategoryData,
  ): Promise<ServerResponse> {
    const category = await Category.findOneBy({ name: data.name })
    if (category) {
      throw new DuplicateEntryError('Kategori sudah ada')
    }

    await Category.insert({
      name: data.name,
    })

    return {
      success: true,
      message: 'Berhasil menambahkan kategori',
    }
  }
}