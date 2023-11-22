import { MainSeeder } from './seeder/MainSeeder.seed'
import { DataSource, DataSourceOptions } from 'typeorm'
import { SeederOptions } from 'typeorm-extension'

const config: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'artistica',
  synchronize: true,
  logging: false,
  migrationsTableName: 'migrations',
  entities: [`${__dirname}/**/entities/**/*.ts`],
  migrations: [`${__dirname}/**/migration/**/*.ts`],
  subscribers: [`${__dirname}/**/subscriber/**/*.ts`],
  seeds: [MainSeeder],
  charset: 'utf8mb4_unicode_ci',

  // cli: {
  //   "entitiesDir": "src/entity",
  //   "migrationsDir": "src/migration",
  //   "subscribersDir": "src/subscriber"
  // }
}
export const AppDataSource = new DataSource(config)