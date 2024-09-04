import { CourseTransaction } from '@entity/CourseTransaction.entity'
import { CustomTransaction } from '@entity/CustomTransaction.entity'
import { Image } from '@entity/Image.entity'
import { TransactionHeader } from '@entity/TransactionHeader.entity'
import { TransactionStatus } from '@entity/TransactionStatus.entity'
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
  success!: boolean
  @Field({ nullable: true })
  token?: string
  @Field({ nullable: true })
  redirect_url?: string
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
class TransactionHistoryImage {
  @Field()
  id!: number
  @Field()
  path!: string
}

@ObjectType()
class TransactionHistoryProductDetail {
  @Field()
  id!: number
  @Field()
  name!: string
  @Field()
  slug!: string
  @Field(() => [TransactionHistoryImage])
  images!: TransactionHistoryImage[]
}

@ObjectType()
class TransactionHistoryVariantDetail {
  @Field()
  id!: number
  @Field()
  sku!: string
  @Field()
  stock!: number
  @Field(() => TransactionHistoryImage, {nullable: true})
  image?: TransactionHistoryImage
  @Field(() => TransactionHistoryProductDetail)
  product!: TransactionHistoryProductDetail
}
@ObjectType()
class TransactionHistoryHeader {
  @Field()
  id!: string
  @Field()
  total_price!: number
  @Field()
  created_at!: Date
  @Field(() => Date, { nullable: true })
  purchase_date?: Date
  @Field()
  customer_email!: string
  @Field()
  customer_name!: string
  @Field(() => String, { nullable: true })
  customer_phone?: string
  @Field(() => String, { nullable: true })
  payment_method?: string
  @Field()
  shipping_address!: string
  @Field()
  shipping_city!: string
  @Field()
  shipping_cost!: number
  @Field()
  shipping_postal_code!: string
  @Field()
  shipping_service!: string
  @Field(() => String, { nullable: true })
  resi_number?: string
  @Field(() => [TransactionHistoryDetail])
  details!: TransactionHistoryDetail[]
  @Field(() => User)
  user!: User
  @Field(() => TransactionStatus)
  status!: TransactionStatus
}

@ObjectType()
class TransactionHistoryDetail {
  @Field()
  id!: number
  @Field()
  price!: number
  @Field()
  quantity!: number
  @Field(() => TransactionHistoryVariantDetail)
  variant!: TransactionHistoryVariantDetail
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
  TransactionHistoryHeader,
}