import { Field, InputType, ObjectType } from 'type-graphql'

@InputType()
class Address {
  @Field()
  first_name?: string
  @Field()
  last_name?: string
  @Field()
  email?: string
  @Field()
  phone?: string
  @Field()
  address?: string
  @Field()
  city?: string
  @Field()
  postal_code?: string
  @Field()
  country_code?: string
}

@InputType()
class CreditCard {
  @Field()
  secure!: boolean
}

@InputType()
class TransactionDetail {
  @Field()
  order_id!: string
  @Field()
  gross_amount!: number
}

@InputType()
class ItemDetail {
  @Field()
  id!: string
  @Field()
  price!: number
  @Field()
  quantity!: number
  @Field()
  name!: string
}

@InputType()
class CustomerDetail {
  @Field()
  first_name?: string
  @Field()
  last_name?: string
  @Field()
  email?: string
  @Field()
  phone?: string
  @Field(() => Address)
  billing_address?: Address
  @Field(() => Address)
  shipping_address?: Address
}

@ObjectType()
class MTCreateTransResp {
  @Field()
  token!: string
  @Field()
  redirect_url!: string
}

export {
  Address,
  CreditCard,
  TransactionDetail,
  ItemDetail,
  CustomerDetail,
  MTCreateTransResp,
}