import { Arg, Authorized, Mutation, Query, Resolver } from 'type-graphql'
import { Category } from '@entity/Category.entity'
import { CategoryList, CategoryReportData, filterCategories } from '@utils/category.type'
import { CategoryData, pagination } from '@utils/params'
import { Roles, ServerResponse } from '@utils/types'
import { DuplicateEntryError, NotFoundError } from '@utils/errors'
import { TransactionHeader } from '@entity/TransactionHeader.entity'

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

  @Authorized<Roles>(['ADMIN'])
  @Mutation(() => ServerResponse)
  async addCategory(
    @Arg('data') data: CategoryData,
  ): Promise<ServerResponse> {
    const category = await Category.findOneBy({ name: data.name })
    if (category) {
      throw new DuplicateEntryError('Kategori sudah ada')
    }

    if (!data.name) {
      throw new Error('Nama kategori tidak boleh kosong')
    }

    await Category.insert({
      name: data.name,
    })

    return {
      success: true,
      message: 'Berhasil menambahkan kategori',
    }
  }

  @Authorized<Roles>(['ADMIN'])
  @Mutation(() => ServerResponse)
  async updateCategory(
    @Arg('id') id: number,
    @Arg('data') data: CategoryData,
  ): Promise<ServerResponse> {
    const category = await Category.findOneBy({ id: id })
    if (!category) {
      throw new NotFoundError('Kategori tidak ditemukan')
    }

    if (!data.name) {
      throw new Error('Nama kategori tidak boleh kosong')
    }

    const sameName = await Category.createQueryBuilder('cat')
      .where('cat.name = :name', { name: data.name })
      .andWhere('cat.id != :id', { id: id })
      .getOne()

    if (sameName) {
      throw new DuplicateEntryError('Kategori sudah ada')
    }

    await Category.update(category.id, {
      name: data.name,
    })

    return {
      success: true,
      message: 'Berhasil mengubah kategori',
    }
  }

  @Authorized<Roles>(['ADMIN'])
  @Mutation(() => ServerResponse)
  async deleteCategory(
    @Arg('id') id: number,
  ): Promise<ServerResponse> {
    const category = await Category.createQueryBuilder('cat')
      .where('cat.id = :id', { id: id })
      .leftJoinAndSelect('cat.products', 'products')
      .getOne()

    if (!category) {
      throw new NotFoundError('Kategori tidak ditemukan')
    }

    if (category.products.length > 0) {
      throw new Error('Kategori tidak dapat dihapus karena masih memiliki produk')
    }

    await Category.delete(category.id)

    return {
      success: true,
      message: 'Berhasil menghapus kategori',
    }
  }

  @Authorized<Roles>(['ADMIN'])
  @Query(() => CategoryReportData)
  async categoryReport(): Promise<CategoryReportData> {
    const categories = await Category.createQueryBuilder('cat')
      .leftJoinAndSelect('cat.products', 'products')
      .getMany()

      let ret: CategoryReportData = {
        labels: [],
        values: [],
      }

    const data = categories.map(async cat => {
      const totalTransactions = await TransactionHeader.createQueryBuilder('th')
        .withDeleted()
        .leftJoin('th.details', 'td')
        .leftJoin('td.variant', 'var')
        .leftJoin('var.product', 'prod')
        .where('prod.category = :category', { category: cat.id })
        .getCount()

        ret.labels.push(cat.name)
        ret.values.push(totalTransactions)
    })

    await Promise.all(data)

    return ret
  }

}