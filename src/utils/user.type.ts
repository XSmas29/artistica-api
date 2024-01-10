import { User } from '@entity/User.entity'
import { Field, InputType, ObjectType } from 'type-graphql'

@InputType()
class filterUsers {
  @Field(() => String, { nullable: true })
  search?: string | null
}

@ObjectType()
class UserList {
  @Field()
  count!: number
  @Field(() => [User])
  users!: User[]
}

export {
  UserList,
  filterUsers,
}