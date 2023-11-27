import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { buildSchema } from 'type-graphql'
import * as env from 'env-var'
import { UserResolver } from '@resolver/User.resolver'
import  dotenv from 'dotenv'
import { authChecker } from '@utils/auth'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { AppDataSource } from './data-source'
import { ProductResolver } from './resolvers/Product.resolver'
dotenv.config()

const main = async () => {
  const app = express()
  app.use(express.json())
  app.use(cors())

  const port = env.get('PORT').required().asPortNumber()

  await AppDataSource.initialize()
  
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, ProductResolver],
      validate: false,
      authChecker: authChecker,
    }),
  })
  await apolloServer.start()

  app.use('/graphql',
    expressMiddleware(apolloServer, {
      context: async context => {
        return {
          req: context.req,
          res: context.res,
          auth: jwt.decode(context.req.headers.authorization || '')
        }
      },
    })
  )

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

main().catch(err => {
  console.error(err)
})

