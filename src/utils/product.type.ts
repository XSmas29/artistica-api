import { Product } from '@entity/Product.entity'
import { Variant } from '@entity/Variant.entity'
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
class ProductList {
  @Field()
  count!: number
  @Field(() => [Product])
  products!: Product[]
  @Field(() => Number)
  price_min!: number
  @Field(() => Number)
  price_max!: number
}

@InputType()
class filterProducts {
  @Field(() => Number, {nullable: true})
  price_min?: number | null
  @Field(() => Number, {nullable: true})
  price_max?: number | null
  @Field(() => [Number], {nullable: true})
  category_ids?: []
  @Field(() => [Number], {nullable: true})
  material_ids?: []
  @Field(() => String, {nullable: true})
  search?: string | null
}

@ObjectType()
class CartData {
  @Field(() => Variant)
  variant!: Variant
  @Field(() => Number)
  quantity!: number
}

export {
  ProductList,
  filterProducts,
  CartData,
}