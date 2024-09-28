"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const MainSeeder_seed_1 = require("@seeder/MainSeeder.seed");
const typeorm_1 = require("typeorm");
const env = __importStar(require("env-var"));
const path_1 = __importDefault(require("path"));
const dir = env.get('NODE_ENV').required().asString() === 'development' ? path_1.default.join(process.cwd(), "src") : path_1.default.join(process.cwd(), "dist");
const config = {
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
    seeds: [MainSeeder_seed_1.MainSeeder],
    charset: 'utf8mb4_unicode_ci',
    // logger: 'file',
    // debug: true,
    // cli: {
    //   "entitiesDir": "src/entity",
    //   "migrationsDir": "src/migration",
    //   "subscribersDir": "src/subscriber"
    // }
};
exports.AppDataSource = new typeorm_1.DataSource(config);
