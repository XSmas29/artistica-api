import { Resolver, Query, Arg, Mutation, Authorized } from "type-graphql";
import { User } from "@entity/User.entity";
import { ServerResponse } from "@utils/types";
import { DuplicateEntryError, GmailTokenError } from "@utils/errors";
import { GmailService } from "@utils/email";
import crypto from 'crypto';

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
    const user_check = await User.findOneBy({ email, is_verified: true })
    if (user_check) {
      throw new DuplicateEntryError("Email sudah terdaftar");
    }
    
    const hash = crypto.createHash('sha256');
    const data = `${email}${Date.now()}`;
    hash.update(data);
    const sha256Hash = hash.digest('hex');
    console.log(sha256Hash);

    let user = await User.findOneBy({ email });
    if (user) {
      await User.update(user.id, { hash: sha256Hash });
    } else {
      user = await User.create({ email, hash: sha256Hash }).save();
    }

    const gmail = new GmailService();
    
    await gmail.sendConfirmationMail(email, sha256Hash)
    return {
      success: true,
      message: "Berhasil mendaftar",
      data: JSON.stringify(user),
    };
  }
}
