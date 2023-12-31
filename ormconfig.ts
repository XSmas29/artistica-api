export = {
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
  seeds: [`${__dirname}/**/seeds/**/*{.ts,.js}`],
  charset: 'utf8mb4_unicode_ci',

  // cli: {
  //   "entitiesDir": "src/entity",
  //   "migrationsDir": "src/migration",
  //   "subscribersDir": "src/subscriber"
  // }
}