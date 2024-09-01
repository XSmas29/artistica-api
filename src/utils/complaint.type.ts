import { Complaint } from "@entity/Complaint.entity"
import { FileUpload, GraphQLUpload } from "graphql-upload-ts"
import { Field, InputType, ObjectType } from "type-graphql"

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

@InputType()
class filterComplaints {
  @Field(() => [Boolean], {nullable: 'itemsAndList'})
  is_approved_values?: (boolean | null)[]

  @Field(() => [Number], {nullable: true})
  type_ids?: number[]
}

@ObjectType()
class ComplaintList {
  @Field()
  count!: number
  @Field(() => [Complaint])
  complaints!: Complaint[]
}

export { 
  ComplaintData,
  filterComplaints,
  ComplaintList,
}