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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_entity_1 = require("@entity/User.entity");
const hash_1 = require("@utils/hash");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env = __importStar(require("env-var"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// ...
class UserSeed {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    id: 1,
                    email: 'admin@mail.com',
                    password: 'admin123',
                    is_admin: true,
                    is_verified: true,
                    first_name: 'Admin',
                    last_name: 'Admin',
                    phone: '08123456789',
                    hash: '',
                },
                {
                    id: 2,
                    email: 'surya@mail.com',
                    password: 'surya123',
                    is_admin: false,
                    is_verified: true,
                    first_name: 'Surya',
                    phone: '08123456789',
                    hash: '',
                },
                {
                    id: 3,
                    email: 'user1@mail.com',
                    password: 'password',
                    is_admin: false,
                    is_verified: true,
                    first_name: 'User',
                    phone: '08123456788',
                    hash: '',
                },
            ];
            const map = data.map((user) => __awaiter(this, void 0, void 0, function* () {
                const refresh_token = jsonwebtoken_1.default.sign({ userData: user }, env.get('JWT_REFRESH_SECRET').required().asString());
                return Object.assign(Object.assign({}, user), { refresh_token, password: yield (0, hash_1.hashPassword)(user.password) });
            }));
            const formattedData = yield Promise.all(map);
            const users = User_entity_1.User.create(formattedData);
            yield User_entity_1.User.save(users);
        });
    }
}
exports.default = UserSeed;
