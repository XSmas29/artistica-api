import { Resolver, Query, Arg, Mutation, Authorized, Args, ArgsType } from "type-graphql";
import { User } from "@entity/User.entity";
import { ServerResponse } from "@utils/types";
import { DuplicateEntryError, GmailTokenError, InvalidInputError, NotFoundError, UnauthorizedError } from "@utils/errors";
import { GmailService } from "@utils/email";
import crypto from 'crypto';
import { VerifyData } from "@utils/params";
import { hashPassword } from "@utils/hash";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as env from 'env-var';

@Resolver(User)
export class UserResolver {
  @Authorized()
  @Query(() => User, { nullable: true })
  async user(
    @Arg("id") id: number
  ): Promise<User> {
    const user = await User.findOneBy({ id });

    if (!user) {
      throw new NotFoundError("User tidak ditemukan");
    }

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
      message: "Silahkan konfirmasi akun anda melalui email yang sudah dikirim",
      data: JSON.stringify(user),
    };
  }

  @Query(() => User, { nullable: true })
  async checkVerifyCode(
    @Arg("code") code: string,
  ): Promise<User> {
    const user = await User.findOneBy({ hash: code, is_verified: false });

    if (!user) {
      throw new NotFoundError("Kode tidak valid atau sudah kadaluarsa");
    }

    return user;
  }

  @Mutation(() => ServerResponse, { nullable: true })
  async verifyUser(
    @Arg("id") id: number,
    @Arg("data") data: VerifyData,
  ): Promise<ServerResponse> {
    const user = await User.findOneBy({ id });

    if (!user) {
      throw new NotFoundError("User tidak ditemukan");
    }

    if (user.is_verified) {
      throw new DuplicateEntryError("User sudah terverifikasi");
    }

    if (data.password !== data.password_confirmation) {
      throw new InvalidInputError("Password dan konfirmasi tidak sama");
    }

    await User.update(user.id, { 
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
      password: await hashPassword(data.password),
      is_verified: true 
    });

    return {
      success: true,
      message: "Berhasil mendaftarkan akun",
      data: JSON.stringify(user),
    };
  }

  @Mutation(() => ServerResponse, { nullable: true })
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
  ): Promise<ServerResponse> {
    const user = await User.findOneBy({ email });

    if (!user) {
      throw new NotFoundError("User tidak ditemukan");
    }

    if (!user.is_verified) {
      throw new UnauthorizedError("User belum terverifikasi");
    }

    const result = await bcrypt.compare(password, user.password!)
    if (!result) {
      throw new UnauthorizedError("Password salah");
    }

    console.log(env.get('JWT_SECRET').required().asString())

    const token = jwt.sign({user: user}, env.get('JWT_SECRET').required().asString(), {
      expiresIn: '7d',
    });

    return {
      success: true,
      message: "Berhasil login",
      data: token,
    };
  }
}
