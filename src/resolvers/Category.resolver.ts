import { Query, Resolver } from 'type-graphql'
import { Category } from '@entity/Category.entity'

@Resolver(Category)
export class CategoryResolver {

  @Query(() => [Category])
  async categories(
  ): Promise<Category[]> {
    const categories = await Category.find()

    return categories
  }
}