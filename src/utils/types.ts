import { Field, ObjectType } from "type-graphql";

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

export {
  ServerResponse,
}