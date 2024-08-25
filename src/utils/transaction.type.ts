import { CourseTransaction } from '@entity/CourseTransaction.entity'
import { CustomTransaction } from '@entity/CustomTransaction.entity'
import { TransactionHeader } from '@entity/TransactionHeader.entity'
import { User } from '@entity/User.entity'
import { Variant } from '@entity/Variant.entity'
import { Field, InputType, ObjectType } from 'type-graphql'

@InputType()
class Address {
  @Field()
  first_name!: string
  @Field()
  last_name?: string
  @Field()
  email!: string
  @Field()
  phone?: string
  @Field()
  address!: string
  @Field()
  city!: string
  @Field()
  postal_code!: string
  @Field()
  country_code?: string
}

@InputType()
class CreditCardMT {
  @Field()
  secure!: boolean
}

@InputType()
class TransactionDetailMT {
  @Field()
  order_id!: string
  @Field()
  gross_amount!: number
}

@InputType()
class ItemDetailMT {
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
class CustomerDetailMT {
  @Field()
  first_name!: string
  @Field()
  last_name?: string
  @Field()
  email!: string
  @Field()
  phone?: string
  @Field(() => Address, { nullable: true })
  billing_address?: Address | null
  @Field(() => Address, { nullable: true })
  shipping_address?: Address | null
}

@ObjectType()
class MTCreateTransResp {
  @Field()
  token!: string
  @Field()
  redirect_url!: string
}

@InputType()
class TransactionData {
  @Field()
  transaction_id!: string
  @Field()
  total_price!: number
  @Field()
  shipping_cost!: number
  @Field()
  shipping_service!: string
  @Field()
  shipping_address!: string
  @Field()
  shipping_city!: string
  @Field()
  shipping_postal_code!: string
  @Field()
  customer_phone!: string
  @Field()
  customer_name!: string
  @Field()
  customer_email!: string
  @Field(() => String, { nullable: true })
  payment_method?: string
  @Field()
  status!: string
}

@InputType()
class TransactionItemData {
  @Field()
  variant_id!: number
  @Field()
  price!: number
  @Field()
  quantity!: number
}

@InputType()
class CourseTransactionData {
  @Field()
  transaction_id!: string
  @Field()
  start_date!: Date
  @Field()
  time_slot!: string
}

@InputType()
class CourseTransactionItemData {
  @Field()
  course_id!: number
  @Field()
  price!: number
  @Field()
  quantity!: number
}

@InputType()
class filterTransaction {
  @Field(() => [Number], {nullable: true})
  status_ids?: []
}

@ObjectType()
class TransactionList {
  @Field()
  count!: number
  @Field(() => [TransactionHeader])
  transactions!: TransactionHeader[]
}

@ObjectType()
class CustomTransactionList {
  @Field()
  count!: number
  @Field(() => [CustomTransaction])
  custom_transactions!: CustomTransaction[]
}

@InputType()
class filterCustomTransaction {
  @Field(() => [Number], {nullable: true})
  status_ids?: []
}

@ObjectType()
class CourseTransactionList {
  @Field()
  count!: number
  @Field(() => [CourseTransaction])
  course_transactions!: CourseTransaction[]
}

export {
  Address,
  CreditCardMT,
  TransactionDetailMT,
  ItemDetailMT,
  CustomerDetailMT,
  MTCreateTransResp,
  TransactionData,
  TransactionItemData,
  filterTransaction,
  TransactionList,
  CourseTransactionItemData,
  CourseTransactionData,
  CourseTransactionList,
  CustomTransactionList,
  filterCustomTransaction,
}