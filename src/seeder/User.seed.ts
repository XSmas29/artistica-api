
import { Seeder } from 'typeorm-extension'
import { User } from '@entity/User.entity'
import { hashPassword } from '@utils/hash'
import jwt from 'jsonwebtoken'
import * as env from 'env-var'
import dotenv from 'dotenv'
dotenv.config()

// ...

export default class UserSeed implements Seeder {
  public async run(): Promise<void> {
    const data: User[] = [
      {
        id: 1,
        email: 'admin@mail.com',
        password: 'admin123',
        is_admin: true,
        is_verified: true,
        first_name: 'Admin',
        last_name: 'Admin',
        hash: '',
      },
    ] as User[]

    const map = data.map(async user => {
      const refresh_token = jwt.sign({userData: user}, env.get('JWT_REFRESH_SECRET').required().asString())
      
      return {
        ...user,
        refresh_token,
        password: await hashPassword(user.password)
      }
    })

    const formattedData = await Promise.all(map) as User[]

    const users = User.create(formattedData)
    await User.save(users)
  }
}