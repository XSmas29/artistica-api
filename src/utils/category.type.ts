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

@ObjectType()
class CategoryReportData {
  @Field(() => [String])
  labels!: string[]
  @Field(() => [Number])
  values!: number[]
}

export {
  CategoryList,
  filterCategories,
  CategoryReportData,
}