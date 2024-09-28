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
    image(chatMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield ChatMessage_entity_1.ChatMessage.createQueryBuilder('chm')
                .where('chm.id = :chatMessageId', { chatMessageId: chatMessage.id })
                .leftJoinAndSelect('chm.chat', 'cht')
                .getOneOrFail();
            const base_url = env.get('BASE_URL').required().asString();
            return chatMessage.image ? `${base_url}/chat/${data.chat.id.toString()}/${chatMessage.image}` : null;
        });
    }
    addChatMessage(_a, data_1) {
        return __awaiter(this, arguments, void 0, function* ({ auth: { userData } }, data) {
            let path = '';
            const imageData = yield data.image;
            if (imageData) {
                const { ext } = (0, path_1.parse)(imageData.filename);
                path = `img_${data.chat_id}_${Date.now().toString()}${ext}`;
                yield (0, files_1.uploadFile)(imageData, `chat/${data.chat_id}`, path);
            }
            const chatMessage = ChatMessage_entity_1.ChatMessage.create({
                message: data.message,
                image: imageData ? path : undefined,
                user: userData,
                chat: yield Chat_entity_1.Chat.findOneByOrFail({ id: data.chat_id }),
            });
            const res = yield chatMessage.save();
            const base_url = env.get('BASE_URL').required().asString();
            res.image = res.image ? `${base_url}/chat/${res.chat.id.toString()}/${res.image}` : undefined;
            return {
                success: true,
                message: 'Berhasil mengirim pesan',
                data: JSON.stringify(res),
            };
        });
    }
    chatMessages(chat_id_1, _a) {
        return __awaiter(this, arguments, void 0, function* (chat_id, { auth: { userData } }) {
            if (!userData.is_admin) {
                const chat = yield Chat_entity_1.Chat.createQueryBuilder('chat')
                    .leftJoinAndSelect('chat.custom_transaction', 'cst')
                    .leftJoinAndSelect('cst.user', 'usr')
                    .where('chat.id = :chat_id', { chat_id })
                    .getOneOrFail();
                if (!(chat.custom_transaction.user.id === userData.id)) {
                    // return error no access
                    throw new errors_1.UnauthorizedError('Tidak punya akses ke chat ini');
                }
            }
            const chatMesssages = yield ChatMessage_entity_1.ChatMessage.createQueryBuilder('chm')
                .where('chm.chat = :chat_id', { chat_id })
                .leftJoinAndSelect('chm.user', 'usr')
                .orderBy('chm.created_at', 'ASC')
                .getMany();
            const res = chatMesssages.map(chatMessage => {
                return Object.assign(Object.assign({}, chatMessage), { is_my_message: chatMessage.user.id === userData.id });
            });
            return res;
        });
    }
    addQuotationMessage(id_1, price_1, _a) {
        return __awaiter(this, arguments, void 0, function* (id, price, { auth: { userData } }) {
            const previousQuotations = yield ChatMessage_entity_1.ChatMessage.createQueryBuilder('cm')
                .where('cm.chat = :id', { id })
                .andWhere('cm.is_quotation_active = true')
                .getMany();
            yield Promise.all(previousQuotations.map((quotation) => __awaiter(this, void 0, void 0, function* () {
                quotation.is_quotation_active = false;
                yield quotation.save();
            })));
            const chatMessage = ChatMessage_entity_1.ChatMessage.create({
                chat: yield Chat_entity_1.Chat.findOneByOrFail({ id }),
                user: userData,
                quotation_price: price,
                is_quotation_active: true,
            });
            yield chatMessage.save();
            const res = yield ChatMessage_entity_1.ChatMessage.createQueryBuilder('chm')
                .where('chm.id = :chatMessageId', { chatMessageId: chatMessage.id })
                .leftJoinAndSelect('chm.chat', 'cht')
                .leftJoinAndSelect('chm.user', 'usr')
                .leftJoinAndSelect('cht.custom_transaction', 'cst')
                .leftJoinAndSelect('cst.images', 'img')
                .getOneOrFail();
            res.chat.custom_transaction.images = res.chat.custom_transaction.images.map(image => {
                const base_url = env.get('BASE_URL').required().asString();
                return Object.assign(Object.assign({}, image), { path: `${base_url}/custom_transaction/${res.chat.custom_transaction.id.toString()}/${image.path}` });
            });
            return {
                success: true,
                message: 'Berhasil mengirim penawaran harga',
                data: JSON.stringify(res),
            };
        });
    }
    chatMessageDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const chatMesssage = yield ChatMessage_entity_1.ChatMessage.createQueryBuilder('chm')
                .where('id = :id', { id })
                .getOneOrFail();
            return chatMesssage;
        });
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
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN', 'USER']),
    (0, type_graphql_1.Query)(() => ChatMessage_entity_1.ChatMessage),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChatMessageResolver.prototype, "chatMessageDetail", null);
exports.ChatMessageResolver = ChatMessageResolver = __decorate([
    (0, type_graphql_1.Resolver)(ChatMessage_entity_1.ChatMessage)
], ChatMessageResolver);
