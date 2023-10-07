import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { buildSchema } from 'type-graphql';
import { DataSource } from 'typeorm';
import { User } from '@entity/User.entity';
import * as env from 'env-var';
import { UserResolver } from './resolvers/User.resolver';
import  dotenv from 'dotenv';
dotenv.config();

const main = async () => {
  const app = express();
  app.use(express.json());

  const port = env.get('PORT').required().asPortNumber();
  
  const AppDataSource = new DataSource({
    type: "mysql",
    host: env.get('HOST').required().asString(),
    port: env.get('DB_PORT').required().asPortNumber(),
    username: env.get('username').required().asString(),
    password: env.get('password').asString(),
    database: env.get('database').required().asString(),
    synchronize: true,
    logging: true,
    entities: [User],
  });
  
  await AppDataSource.initialize();
  
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
  });
  await apolloServer.start();

  app.use('/graphql',
    expressMiddleware(apolloServer)
  );

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main().catch((err) => {
  console.error(err);
});

