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
import { ApolloServerLoaderPlugin } from '@xsmas29/type-graphql-dataloader'
import { MaterialResolver } from '@resolver/Material.resolver'
import { CategoryResolver } from '@resolver/Category.resolver'
import { VariantResolver } from '@resolver/Variant.resolver'
import { DeliveryResolver } from '@resolver/Delivery.resolver'
import { TransactionResolver } from '@resolver/Transaction.resolver'
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js'
import MidtransREST from '@utils/webhook/midtrans.webhook'
import { CustomTransactionResolver } from '@resolver/CustomTransaction.resolver'
import { ChatResolver } from '@resolver/Chat.resolver'
import createIOInstance from '@utils/socketIO'

dotenv.config()

const main = async () => {
  const app = express()

  app.use(express.json())
  app.use(cors())
  app.use(express.static('public'))
  app.use(graphqlUploadExpress())

  const port = env.get('PORT').required().asPortNumber()
  const wsPort = env.get('WS_PORT').required().asPortNumber()

  await AppDataSource.initialize()
  
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver, 
        ProductResolver, 
        MaterialResolver, 
        CategoryResolver, 
        VariantResolver,
        DeliveryResolver,
        TransactionResolver,
        CustomTransactionResolver,
        ChatResolver,
      ],
      validate: true,
      authChecker: authChecker,
    }),
    
    plugins: [ 
      ApolloServerLoaderPlugin({ typeormGetConnection() {
          return AppDataSource
      }, }),

      // ApolloServerPluginLandingPageDisabled(),
    ],

    // csrfPrevention: false,

  })
  await apolloServer.start()

  app.use('/graphql',
    expressMiddleware(apolloServer, {
      context: async requestContext => {
        return {
          req: requestContext.req,
          res: requestContext.res,
          auth: jwt.decode(requestContext.req.headers.authorization || '')
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

  app.use('/midtrans', MidtransREST)  

  const { httpServer } = createIOInstance(app)

  httpServer.listen(wsPort)
}

main().catch(err => {
  console.error(err)
})

