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
exports.Chat = void 0;
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const CustomTransaction_entity_1 = require("./CustomTransaction.entity");
const ChatMessage_entity_1 = require("./ChatMessage.entity");
let Chat = class Chat extends typeorm_1.BaseEntity {
};
exports.Chat = Chat;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Chat.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Chat.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => CustomTransaction_entity_1.CustomTransaction),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => CustomTransaction_entity_1.CustomTransaction, customTransaction => customTransaction.chat),
    __metadata("design:type", CustomTransaction_entity_1.CustomTransaction)
], Chat.prototype, "custom_transaction", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [ChatMessage_entity_1.ChatMessage]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => ChatMessage_entity_1.ChatMessage, chatMessage => chatMessage.chat),
    __metadata("design:type", Array)
], Chat.prototype, "messages", void 0);
exports.Chat = Chat = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'chat' })
], Chat);
