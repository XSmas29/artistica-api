import { AuthChecker } from 'type-graphql'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import * as env from 'env-var'
import { User } from '@entity/User.entity'

interface MyContext {
  req: Request;
  res: Response;
}

const authChecker: AuthChecker<MyContext> = ({ context: { req, res } }) => {
  const token = req.headers.authorization
  if (!token) return false

  jwt.verify(token, env.get('JWT_SECRET').required().asString(), (err, decoded) => {
    // if (err) throw err;
    if (err) return res.sendStatus(403)
    else return true
  })
  
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