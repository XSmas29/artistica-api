import { AuthChecker } from 'type-graphql'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import * as env from 'env-var'
import { User } from '@entity/User.entity'

interface MyContext {
  req: Request;
  res: Response;
}

type Role = 'ADMIN' | 'USER'

const authChecker: AuthChecker<MyContext, Role> = ({ context: { req, res } }, roles?: Role[]) => {
  const token = req.headers.authorization
  if (!token || token === 'null') return false
  else {
    jwt.verify(token, env.get('JWT_SECRET').required().asString(), (err, decoded) => {
      // if (err) throw err;
      if (err) return false
      else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const role = (decoded as any).userData.is_admin ? 'ADMIN' : 'USER'
  
        if (roles && roles.length > 0 && !roles.includes(role)) return false
        else return true
      }
    })
  }

  return true
}

const generateAccessToken = (user: User) => {
  return jwt.sign({userData: user}, env.get('JWT_SECRET').required().asString(), {
    expiresIn: '15min',
  })
}

export {
  authChecker,
  generateAccessToken
}