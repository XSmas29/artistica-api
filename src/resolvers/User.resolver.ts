import { Resolver, Query, Arg, Mutation, Authorized, Ctx } from 'type-graphql'
import { User } from '@entity/User.entity'
import { AuthToken, Context, LoginResponse, ServerResponse } from '@utils/types'
import { DuplicateEntryError, InvalidInputError, NotFoundError, UnauthorizedError } from '@utils/errors'
import { GmailService } from '@utils/email'
import crypto from 'crypto'
import { EditPasswordData, EditProfileData, VerifyData, pagination } from '@utils/params'
import { hashPassword } from '@utils/hash'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import * as env from 'env-var'
import { generateAccessToken } from '@utils/auth'
import { UserList, filterUsers } from '@utils/user.type'
@Resolver(User)
export class UserResolver {

  @Authorized(['ADMIN'])
  @Query(() => UserList, { nullable: true })
  async users(
    @Arg('filter', { nullable: true }) filter?: filterUsers,
    @Arg('pagination', { nullable: true }) pagination?: pagination,
  ): Promise<UserList> {
    const usersQuery = User.createQueryBuilder('user')

    if (filter?.search) {
      usersQuery.where('mat.first_name LIKE :search', { search: `%${filter.search}%` })
      usersQuery.orWhere('mat.last_name LIKE :search', { search: `%${filter.search}%` })
    }

    if (pagination) {
      usersQuery.limit(pagination.limit)
      usersQuery.offset((pagination.page - 1) * pagination.limit)
    }

    const users = await usersQuery.getManyAndCount()

    return {
      count: users[1],
      users: users[0],
    }
  }
  
  @Authorized(['USER', 'ADMIN'])
  @Query(() => User, { nullable: true })
  async profileInfo(
    @Ctx() { auth: { userData } }: Context
  ): Promise<User> {
    const id = userData.id
    const user = await User.findOneBy({ id, is_verified: true })
    if (!user) {
      throw new NotFoundError('User tidak ditemukan')
    }
    
    return user
  }

  @Authorized(['USER', 'ADMIN'])
  @Mutation(() => ServerResponse, { nullable: true })
  async editProfile(
    @Arg('data') data: EditProfileData,
    @Ctx() { auth: { userData } }: Context
  ): Promise<ServerResponse> {
    const id = userData.id
    const user = await User.findOneBy({ id, is_verified: true })

    if (!user) {
      throw new NotFoundError('User tidak ditemukan')
    }

    await User.update(user.id, {
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
    })

    return {
      success: true,
      message: 'Berhasil Update Profil',
      data: JSON.stringify(user),
    }
  }

  @Authorized(['USER', 'ADMIN'])
  @Mutation(() => ServerResponse, { nullable: true })
  async editPassword(
    @Arg('data') data: EditPasswordData,
    @Ctx() { auth: { userData } }: Context
  ): Promise<ServerResponse> {
    const id = userData.id
    const user = await User.findOneBy({ id, is_verified: true })

    if (!user) {
      throw new NotFoundError('User tidak ditemukan')
    }

    const result = await bcrypt.compare(data.old_password, user.password!)
    if (!result) {
      throw new UnauthorizedError('Password salah')
    }

    if (data.new_password !== data.password_confirmation) {
      throw new InvalidInputError('Password dan konfirmasi tidak sama')
    }

    await User.update(user.id, {
      password: await hashPassword(data.new_password),
    })

    return {
      success: true,
      message: 'Berhasil update password',
      data: JSON.stringify(user),
    }
  }

  @Mutation(() => ServerResponse)
  async register(
    @Arg('email') email: string,
  ): Promise<ServerResponse> {
    const user_check = await User.findOneBy({ email, is_verified: true })
    if (user_check) {
      throw new DuplicateEntryError('Email sudah terdaftar')
    }
    const hash = crypto.createHash('sha256')
    const data = `${email}${Date.now()}`
    hash.update(data)
    const sha256Hash = hash.digest('hex')
    console.log(sha256Hash)

    let user = await User.findOneBy({ email })
    if (user) {
      await User.update(user.id, { hash: sha256Hash })
    } else {
      user = await User.create({ email, hash: sha256Hash }).save()
    }
    const gmail = new GmailService()
    
    await gmail.sendConfirmationMail(email, sha256Hash)
    
    return {
      success: true,
      message: 'Silahkan konfirmasi akun anda melalui email yang sudah dikirim ke akun email anda',
      data: JSON.stringify(user),
    }
  }

  @Query(() => User, { nullable: true })
  async checkVerifyCode(
    @Arg('code') code: string,
  ): Promise<User> {
    const user = await User.findOneBy({ hash: code, is_verified: false })

    if (!user) {
      throw new NotFoundError('Kode tidak valid atau sudah kadaluarsa')
    }

    return user
  }

  @Authorized(['USER', 'ADMIN'])
  @Query(() => AuthToken, { nullable: true })
  async refreshToken(
    @Arg('refresh_token') refresh_token: string,
  ): Promise<AuthToken> {
    const user = await User.findOneBy({ refresh_token, is_verified: true })

    if (!user) {
      throw new NotFoundError('User tidak ditemukan')
    }

    const token = generateAccessToken(user)

    return {
      token,
      refresh_token: user.refresh_token
    }
  }

  @Mutation(() => ServerResponse, { nullable: true })
  async verifyUser(
    @Arg('id') id: number,
    @Arg('data') data: VerifyData,
  ): Promise<ServerResponse> {
    const user = await User.findOneBy({ id })

    if (!user) {
      throw new NotFoundError('User tidak ditemukan')
    }

    if (user.is_verified) {
      throw new DuplicateEntryError('User sudah terverifikasi')
    }

    if (data.password !== data.password_confirmation) {
      throw new InvalidInputError('Password dan konfirmasi tidak sama')
    }

    await User.update(user.id, { 
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
      password: await hashPassword(data.password),
      is_verified: true 
    })

    //insert refresh token
    const newUser = await User.findOneByOrFail({ id })

    const refresh_token = jwt.sign({userData: newUser}, env.get('JWT_REFRESH_SECRET').required().asString())

    await User.update(user.id, { refresh_token })

    return {
      success: true,
      message: 'Berhasil mendaftarkan akun',
      data: JSON.stringify(user),
    }
  }

  @Mutation(() => LoginResponse, { nullable: true })
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
  ): Promise<LoginResponse> {
    const user = await User.findOneBy({ email })

    if (!user) {
      throw new NotFoundError('User tidak ditemukan')
    }

    if (!user.is_verified) {
      throw new UnauthorizedError('User belum terverifikasi')
    }

    const result = await bcrypt.compare(password, user.password!)
    if (!result) {
      throw new UnauthorizedError('Password salah')
    }

    const token = generateAccessToken(user)
    
    return {
      success: true,
      message: 'Berhasil login',
      token,
      refresh_token: user.refresh_token
    }
  }
}
