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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_entity_1 = require("@entity/User.entity");
const types_1 = require("@utils/types");
const errors_1 = require("@utils/errors");
const email_1 = require("@utils/email");
const crypto_1 = __importDefault(require("crypto"));
const params_1 = require("@utils/params");
const hash_1 = require("@utils/hash");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env = __importStar(require("env-var"));
const auth_1 = require("@utils/auth");
const user_type_1 = require("@utils/user.type");
const typeorm_1 = require("typeorm");
let UserResolver = class UserResolver {
    async users(filter, pagination) {
        const usersQuery = User_entity_1.User.createQueryBuilder('user');
        usersQuery.where('user.is_admin = :is_admin', { is_admin: false });
        if (filter?.search) {
            usersQuery.andWhere(new typeorm_1.Brackets(qb => {
                qb.where('user.first_name LIKE :search', { search: `%${filter.search}%` });
                qb.orWhere('user.last_name LIKE :search', { search: `%${filter.search}%` });
            }));
        }
        console.log(usersQuery.getSql());
        if (pagination) {
            usersQuery.limit(pagination.limit);
            usersQuery.offset((pagination.page - 1) * pagination.limit);
        }
        const users = await usersQuery.getManyAndCount();
        return {
            count: users[1],
            users: users[0],
        };
    }
    async profileInfo({ auth: { userData } }) {
        const id = userData.id;
        const user = await User_entity_1.User.findOneBy({ id, is_verified: true });
        if (!user) {
            throw new errors_1.NotFoundError('User tidak ditemukan');
        }
        return user;
    }
    async editProfile(data, { auth: { userData } }) {
        const id = userData.id;
        const user = await User_entity_1.User.findOneBy({ id, is_verified: true });
        if (!user) {
            throw new errors_1.NotFoundError('User tidak ditemukan');
        }
        await User_entity_1.User.update(user.id, {
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone,
        });
        return {
            success: true,
            message: 'Berhasil Update Profil',
            data: JSON.stringify(user),
        };
    }
    async editPassword(data, { auth: { userData } }) {
        const id = userData.id;
        const user = await User_entity_1.User.findOneBy({ id, is_verified: true });
        if (!user) {
            throw new errors_1.NotFoundError('User tidak ditemukan');
        }
        const result = await bcrypt_1.default.compare(data.old_password, user.password);
        if (!result) {
            throw new errors_1.UnauthorizedError('Password salah');
        }
        if (data.new_password !== data.password_confirmation) {
            throw new errors_1.InvalidInputError('Password dan konfirmasi tidak sama');
        }
        await User_entity_1.User.update(user.id, {
            password: await (0, hash_1.hashPassword)(data.new_password),
        });
        return {
            success: true,
            message: 'Berhasil update password',
            data: JSON.stringify(user),
        };
    }
    async register(email) {
        const user_check = await User_entity_1.User.findOneBy({ email, is_verified: true });
        if (user_check) {
            throw new errors_1.DuplicateEntryError('Email sudah terdaftar');
        }
        const hash = crypto_1.default.createHash('sha256');
        const data = `${email}${Date.now()}`;
        hash.update(data);
        const sha256Hash = hash.digest('hex');
        console.log(sha256Hash);
        let user = await User_entity_1.User.findOneBy({ email });
        if (user) {
            await User_entity_1.User.update(user.id, { hash: sha256Hash });
        }
        else {
            user = await User_entity_1.User.create({ email, hash: sha256Hash }).save();
        }
        const gmail = new email_1.GmailService();
        await gmail.sendConfirmationMail(email, sha256Hash);
        return {
            success: true,
            message: 'Silahkan konfirmasi akun anda melalui email yang sudah dikirim ke akun email anda',
            data: JSON.stringify(user),
        };
    }
    async checkVerifyCode(code) {
        const user = await User_entity_1.User.findOneBy({ hash: code, is_verified: false });
        if (!user) {
            throw new errors_1.NotFoundError('Kode tidak valid atau sudah kadaluarsa');
        }
        return user;
    }
    async refreshToken(refresh_token) {
        const user = await User_entity_1.User.findOneBy({ refresh_token, is_verified: true });
        if (!user) {
            throw new errors_1.NotFoundError('User tidak ditemukan');
        }
        const token = (0, auth_1.generateAccessToken)(user);
        return {
            token,
            refresh_token: user.refresh_token
        };
    }
    async verifyUser(id, data) {
        const user = await User_entity_1.User.findOneBy({ id });
        if (!user) {
            throw new errors_1.NotFoundError('User tidak ditemukan');
        }
        if (user.is_verified) {
            throw new errors_1.DuplicateEntryError('User sudah terverifikasi');
        }
        if (data.password !== data.password_confirmation) {
            throw new errors_1.InvalidInputError('Password dan konfirmasi tidak sama');
        }
        await User_entity_1.User.update(user.id, {
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone,
            password: await (0, hash_1.hashPassword)(data.password),
            is_verified: true
        });
        //insert refresh token
        const newUser = await User_entity_1.User.findOneByOrFail({ id });
        const refresh_token = jsonwebtoken_1.default.sign({ userData: newUser }, env.get('JWT_REFRESH_SECRET').required().asString());
        await User_entity_1.User.update(user.id, { refresh_token });
        return {
            success: true,
            message: 'Berhasil mendaftarkan akun',
            data: JSON.stringify(user),
        };
    }
    async login(email, password) {
        const user = await User_entity_1.User.findOneBy({ email });
        if (!user) {
            throw new errors_1.NotFoundError('User tidak ditemukan');
        }
        if (!user.is_verified) {
            throw new errors_1.UnauthorizedError('User belum terverifikasi');
        }
        const result = await bcrypt_1.default.compare(password, user.password);
        if (!result) {
            throw new errors_1.UnauthorizedError('Password salah');
        }
        const token = (0, auth_1.generateAccessToken)(user);
        return {
            success: true,
            message: 'Berhasil login',
            token,
            refresh_token: user.refresh_token
        };
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Query)(() => user_type_1.UserList, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('filter', { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('pagination', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_type_1.filterUsers,
        params_1.pagination]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => User_entity_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "profileInfo", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [params_1.EditProfileData, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editProfile", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [params_1.EditPasswordData, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editPassword", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_entity_1.User, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "checkVerifyCode", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => types_1.AuthToken, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('refresh_token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "refreshToken", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, params_1.VerifyData]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "verifyUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => types_1.LoginResponse, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('email')),
    __param(1, (0, type_graphql_1.Arg)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
exports.UserResolver = UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(User_entity_1.User)
], UserResolver);
