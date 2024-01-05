import { Field, InputType } from 'type-graphql'
import GraphQLUpload from 'graphql-upload/GraphQLUpload.js'
import Upload, { FileUpload } from 'graphql-upload/Upload.js'

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

@InputType()
class AddProductDataProduct {
  @Field()
  name!: string
  @Field()
  description!: string
  @Field()
  category_id!: number
  @Field()
  material_id!: number
  @Field(() => [GraphQLUpload])
  images!: FileUpload[]
}

@InputType()
class AddProductDataAttributes {
  @Field()
  name!: string
  @Field(() => [String])
  values!: string[]
}

@InputType()
class AddProductDataVariants {
  @Field()
  price!: number
  @Field()
  stock!: number
  @Field()
  sku!: string
  @Field(() => GraphQLUpload, { nullable: true })
  image!: FileUpload | null
}

@InputType()
class ProductData {
  @Field(() => AddProductDataProduct)
  product!: AddProductDataProduct
  @Field(() => [AddProductDataAttributes])
  attributes!: AddProductDataAttributes[]
  @Field(() => [AddProductDataVariants])
  variants!: AddProductDataVariants[]
}

@InputType()
class CategoryData {
  @Field()
  name!: string
}

export {
  VerifyData,
  EditProfileData,
  EditPasswordData,
  pagination,
  sort,
  CartParams,
  ProductData,
  CategoryData,
}