import { AuthChecker } from "type-graphql";
import { Request } from "express";
import jwt from 'jsonwebtoken';
import * as env from "env-var";

interface MyContext {
  req: Request;
}

export const authChecker: AuthChecker<MyContext> = ({ context: { req } }) => {
  const token = req.headers.authorization;
  if (!token) return false;

  jwt.verify(token, env.get('JWT_SECRET').required().asString(), (err, decoded) => {
    if (err) throw err;
    else return true;
  });
  
  return true;
}