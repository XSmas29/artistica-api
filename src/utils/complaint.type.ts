import { FileUpload, GraphQLUpload } from "graphql-upload-ts"
import { Field, InputType } from "type-graphql"

@InputType()
class ComplaintData {
  @Field()
  custom_transaction_id!: string

  @Field()
  type_id!: number

  @Field()
  description!: string

  @Field(() => GraphQLUpload, { nullable: true })
  image?: FileUpload | null
}

export { ComplaintData }