import { Field, Arg, ObjectType, ArgsType, InputType, } from "type-graphql";

@InputType()
class VerifyData {
  @Field()
  first_name!: string;
  @Field()
  last_name?: string;
  @Field()
  phone?: string;
  @Field()
  password!: string;
  @Field()
  password_confirmation!: string;
};

@InputType()
class EditProfileData {
  @Field()
  first_name!: string;
  @Field()
  last_name?: string;
  @Field()
  phone?: string;
}

export {
  VerifyData,
  EditProfileData,
}