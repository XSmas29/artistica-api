import { MainSeeder } from '@seeder/MainSeeder.seed'
import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'
import * as env from 'env-var'
import path from 'path'

const dir = env.get('NODE_ENV').required().asString() === 'development' ? path.join(process.cwd(), "src") : path.join(process.cwd(), "dist")

const config: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: env.get('DB_HOST').required().asString(),
  port: env.get('DB_PORT').required().asPortNumber(),
  username: env.get('DB_USERNAME').required().asString(),
  password: env.get('DB_PASSWORD').asString(),
  database: env.get('DB_NAME').required().asString(),
  synchronize: true,
  logging: false,
  migrationsTableName: 'migrations',
  entities: [`${dir}/**/entities/**/*.ts`],
  migrations: [`${dir}/**/migration/**/*.ts`],
  subscribers: [`${dir}/**/subscriber/**/*.ts`],
  seeds: [MainSeeder],
  charset: 'utf8mb4_unicode_ci',
  // logger: 'file',
  // debug: true,

  // cli: {
  //   "entitiesDir": "src/entity",
  //   "migrationsDir": "src/migration",
  //   "subscribersDir": "src/subscriber"
  // }
}
export const AppDataSource = new DataSource(config)