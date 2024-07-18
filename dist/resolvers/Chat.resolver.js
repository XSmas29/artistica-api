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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatResolver = void 0;
const Chat_entity_1 = require("@entity/Chat.entity");
const type_graphql_1 = require("type-graphql");
let ChatResolver = class ChatResolver {
    async chats({ auth: { userData } }) {
        const chats = Chat_entity_1.Chat.createQueryBuilder('chat')
            .leftJoinAndSelect('chat.custom_transaction', 'ct');
        if (!userData.is_admin) {
            chats.where('ct.user = :user', { user: userData.id });
        }
        const chatData = await chats.getMany();
        return chatData;
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
