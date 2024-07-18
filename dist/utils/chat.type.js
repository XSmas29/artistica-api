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
exports.ChatMessageList = void 0;
const ChatMessage_entity_1 = require("@entity/ChatMessage.entity");
const type_graphql_1 = require("type-graphql");
let ChatMessageList = class ChatMessageList extends ChatMessage_entity_1.ChatMessage {
    is_my_message;
};
exports.ChatMessageList = ChatMessageList;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ChatMessageList.prototype, "is_my_message", void 0);
exports.ChatMessageList = ChatMessageList = __decorate([
    (0, type_graphql_1.ObjectType)()
], ChatMessageList);
