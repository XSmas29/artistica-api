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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessageResolver = void 0;
const Chat_entity_1 = require("@entity/Chat.entity");
const ChatMessage_entity_1 = require("@entity/ChatMessage.entity");
const chat_type_1 = require("@utils/chat.type");
const errors_1 = require("@utils/errors");
const files_1 = require("@utils/files");
const params_1 = require("@utils/params");
const types_1 = require("@utils/types");
const path_1 = require("path");
const type_graphql_1 = require("type-graphql");
const env = __importStar(require("env-var"));
let ChatMessageResolver = class ChatMessageResolver {
    async image(chatMessage) {
        const data = await ChatMessage_entity_1.ChatMessage.createQueryBuilder('chm')
            .where('chm.id = :chatMessageId', { chatMessageId: chatMessage.id })
            .leftJoinAndSelect('chm.chat', 'cht')
            .getOneOrFail();
        const base_url = env.get('BASE_URL').required().asString();
        return chatMessage.image ? `${base_url}/chat/${data.chat.id.toString()}/${chatMessage.image}` : null;
    }
    async addChatMessage({ auth: { userData } }, data) {
        let path = '';
        const imageData = await data.image;
        if (imageData) {
            const { ext } = (0, path_1.parse)(imageData.filename);
            path = `img_${data.chat_id}_${Date.now().toString()}${ext}`;
            await (0, files_1.uploadFile)(imageData, `chat/${data.chat_id}`, path);
        }
        const chatMessage = ChatMessage_entity_1.ChatMessage.create({
            message: data.message,
            image: imageData ? path : undefined,
            user: userData,
            chat: await Chat_entity_1.Chat.findOneByOrFail({ id: data.chat_id }),
        });
        const res = await chatMessage.save();
        const base_url = env.get('BASE_URL').required().asString();
        res.image = res.image ? `${base_url}/chat/${res.chat.id.toString()}/${res.image}` : undefined;
        return {
            success: true,
            message: 'Berhasil mengirim pesan',
            data: JSON.stringify(res),
        };
    }
    async chatMessages(chat_id, { auth: { userData } }) {
        if (!userData.is_admin) {
            const chat = await Chat_entity_1.Chat.createQueryBuilder('chat')
                .leftJoinAndSelect('chat.custom_transaction', 'cst')
                .leftJoinAndSelect('cst.user', 'usr')
                .where('chat.id = :chat_id', { chat_id })
                .getOneOrFail();
            if (!(chat.custom_transaction.user.id === userData.id)) {
                // return error no access
                throw new errors_1.UnauthorizedError('Tidak punya akses ke chat ini');
            }
        }
        const chatMesssages = await ChatMessage_entity_1.ChatMessage.createQueryBuilder('chm')
            .where('chm.chat = :chat_id', { chat_id })
            .leftJoinAndSelect('chm.user', 'usr')
            .orderBy('chm.created_at', 'ASC')
            .getMany();
        const res = chatMesssages.map(chatMessage => {
            return {
                ...chatMessage,
                is_my_message: chatMessage.user.id === userData.id,
            };
        });
        return res;
    }
    async addQuotationMessage(id, price, { auth: { userData } }) {
        const chatMessage = ChatMessage_entity_1.ChatMessage.create({
            chat: await Chat_entity_1.Chat.findOneByOrFail({ id }),
            user: userData,
            quotation_price: price,
            is_quotation_active: true,
        });
        await chatMessage.save();
        return {
            success: true,
            message: 'Berhasil mengirim penawaran harga',
        };
    }
};
exports.ChatMessageResolver = ChatMessageResolver;
__decorate([
    (0, type_graphql_1.FieldResolver)(() => String),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChatMessage_entity_1.ChatMessage]),
    __metadata("design:returntype", Promise)
], ChatMessageResolver.prototype, "image", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, params_1.ChatMessageData]),
    __metadata("design:returntype", Promise)
], ChatMessageResolver.prototype, "addChatMessage", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => [chat_type_1.ChatMessageList]),
    __param(0, (0, type_graphql_1.Arg)('chat_id')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ChatMessageResolver.prototype, "chatMessages", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('price')),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ChatMessageResolver.prototype, "addQuotationMessage", null);
exports.ChatMessageResolver = ChatMessageResolver = __decorate([
    (0, type_graphql_1.Resolver)(ChatMessage_entity_1.ChatMessage)
], ChatMessageResolver);
