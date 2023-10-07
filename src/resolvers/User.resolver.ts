import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { User } from "@entity/User.entity";

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async user(@Arg("id") id: number): Promise<User> {
    const user = await User.findOneByOrFail({ id });
    return user;
  }

  @Mutation(() => User)
  async createUser(
    @Arg("name") name: string,
    @Arg("email") email: string
  ): Promise<User> {
    const user = await User.create({ name, email }).save();
    return user;
  }
}
