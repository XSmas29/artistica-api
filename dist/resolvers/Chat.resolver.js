"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatResolver = void 0;
const Chat_entity_1 = require("@entity/Chat.entity");
const type_graphql_1 = require("type-graphql");
let ChatResolver = class ChatResolver {
    chats(_a) {
        return __awaiter(this, arguments, void 0, function* ({ auth: { userData } }) {
            const chats = Chat_entity_1.Chat.createQueryBuilder('chat')
                .leftJoinAndSelect('chat.custom_transaction', 'ct')
                .where('ct.status != :status', { status: 270 });
            if (!userData.is_admin) {
                chats.andWhere('ct.user = :user', { user: userData.id });
            }
            const chatData = yield chats.getMany();
            return chatData;
        });
    }
};
exports.ChatResolver = ChatResolver;
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => [Chat_entity_1.Chat]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "chats", null);
exports.ChatResolver = ChatResolver = __decorate([
    (0, type_graphql_1.Resolver)(Chat_entity_1.Chat)
], ChatResolver);
