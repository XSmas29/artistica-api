import { Request } from 'express'
import { Field, ObjectType } from 'type-graphql'
import { User } from '@entity/User.entity'

// Define a type for the server response data
@ObjectType()
class ServerResponse {
  @Field()
  success!: boolean
  @Field()
  message?: string
  @Field(() => String)
  data?: string | null
}

@ObjectType()
class LoginResponse extends ServerResponse {
  @Field()
  token!: string
  @Field()
  refresh_token!: string
}

@ObjectType()
class AuthToken {
  @Field()
  token!: string
  @Field()
  refresh_token!: string
}

type Context = {
  req: Request;
  auth: {
    userData: User,
    iat: number,
    exp: number
  };
}

@ObjectType()
class Province {
  @Field()
  province_id!: string
  @Field()
  province!: string
}

@ObjectType()
class City {
  @Field()
  city_id!: string
  @Field()
  province_id!: string
  @Field()
  province!: string
  @Field()
  type!: string
  @Field()
  city_name!: string
  @Field()
  postal_code!: string
}

export {
  ServerResponse,
  Context,
  AuthToken,
  LoginResponse,
  Province,
  City
}