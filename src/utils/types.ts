import { Request } from "express";
import { Field, ObjectType } from "type-graphql";
import { User } from "@entity/User.entity";
// Define a type for the server response data
@ObjectType()
class ServerResponse {
  @Field()
  success!: boolean;
  @Field()
  message?: string;
  @Field()
  data?: string;
};

type Context = {
  req: Request;
  auth: {
    userData: User,
    iat: number,
    exp: number
  };
}

export {
  ServerResponse,
  Context,
}