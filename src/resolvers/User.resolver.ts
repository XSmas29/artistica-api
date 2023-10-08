import { Resolver, Query, Arg, Mutation, Authorized } from "type-graphql";
import { User } from "@entity/User.entity";
import { ServerResponse } from "@utils/types";
import { DuplicateEntryError } from "@utils/errors";

@Resolver(User)
export class UserResolver {
  @Authorized()
  @Query(() => User, { nullable: true })
  async user(@Arg("id") id: number): Promise<User> {
    const user = await User.findOneByOrFail({ id });
    return user;
  }

  @Mutation(() => ServerResponse)
  async register(
    @Arg("email") email: string,
  ): Promise<ServerResponse> {
    const user_check = await User.findOneBy({ email })
    if (user_check) {
      throw new DuplicateEntryError("Email sudah terdaftar");
    }

    const user = await User.create({ email }).save();
    
    return {
      success: true,
      message: "Berhasil mendaftar",
      data: JSON.stringify(user),
    };
  }
}
