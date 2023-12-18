import { Field, InputType } from 'type-graphql'

@InputType()
class VerifyData {
  @Field()
  first_name!: string
  @Field()
  last_name?: string
  @Field()
  phone?: string
  @Field()
  password!: string
  @Field()
  password_confirmation!: string
}

@InputType()
class EditProfileData {
  @Field()
  first_name!: string
  @Field()
  last_name?: string
  @Field()
  phone?: string
}

@InputType()
class EditPasswordData {
  @Field()
  old_password!: string
  @Field()
  new_password!: string
  @Field()
  password_confirmation!: string
}

@InputType()
class pagination {
  @Field()
  limit!: number
  @Field()
  page!: number
}

@InputType()
class sort {
  @Field()
  field!: string
  @Field(() => String)
  sort!: 'ASC' | 'DESC'
}

@InputType()
class CartParams {
  @Field()
  product_id!: number
  @Field()
  variant_id!: number
  @Field()
  quantity!: number
}

export {
  VerifyData,
  EditProfileData,
  EditPasswordData,
  pagination,
  sort,
  CartParams
}