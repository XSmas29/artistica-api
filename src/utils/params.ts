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
class EditPaswordData {
  @Field()
  old_password!: string
  @Field()
  new_password!: string
  @Field()
  password_confirmation!: string
}

@InputType()
class filterProducts {
  @Field()
  price_min?: number
  @Field()
  price_max?: number
  @Field()
  category_id?: number
  @Field()
  material_id?: number
  @Field()
  search?: string
}

@InputType()
class pagination {
  @Field()
  limit!: number
  @Field()
  offset!: number
}

@InputType()
class sort {
  @Field()
  field!: string
  @Field(() => String)
  sort!: 'ASC' | 'DESC'
}

export {
  VerifyData,
  EditProfileData,
  EditPaswordData,
  filterProducts,
  pagination,
  sort
}