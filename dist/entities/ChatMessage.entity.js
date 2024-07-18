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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = void 0;
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Chat_entity_1 = require("./Chat.entity");
const User_entity_1 = require("./User.entity");
let ChatMessage = class ChatMessage extends typeorm_1.BaseEntity {
    id;
    message;
    image;
    chat;
    user;
    created_at;
    quotation_price;
    is_quotation_active;
};
exports.ChatMessage = ChatMessage;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ChatMessage.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)('longtext', { nullable: true }),
    __metadata("design:type", String)
], ChatMessage.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ChatMessage.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Chat_entity_1.Chat),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Chat_entity_1.Chat, chat => chat.messages),
    __metadata("design:type", Chat_entity_1.Chat)
], ChatMessage.prototype, "chat", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_entity_1.User),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, user => user.chat_messages),
    __metadata("design:type", User_entity_1.User)
], ChatMessage.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ChatMessage.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ChatMessage.prototype, "quotation_price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ChatMessage.prototype, "is_quotation_active", void 0);
exports.ChatMessage = ChatMessage = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'chat_messages' })
], ChatMessage);
