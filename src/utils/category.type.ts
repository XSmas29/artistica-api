import { Category } from '@entity/Category.entity'
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
class CategoryList {
  @Field()
  count!: number
  @Field(() => [Category])
  categories!: Category[]
}

@InputType()
class filterCategories {
  @Field(() => String, {nullable: true})
  search?: string | null
}

export {
  CategoryList,
  filterCategories,
}