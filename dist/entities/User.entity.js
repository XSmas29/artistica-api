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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const TransactionHeader_entity_1 = require("./TransactionHeader.entity");
const CustomTransaction_entity_1 = require("./CustomTransaction.entity");
const ChatMessage_entity_1 = require("./ChatMessage.entity");
const CourseTransaction_entity_1 = require("./CourseTransaction.entity");
let User = class User extends typeorm_1.BaseEntity {
};
exports.User = User;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_verified", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "hash", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    (0, typeorm_1.Column)("varchar", { nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "reset_password_hash", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_admin", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 1000 }),
    __metadata("design:type", String)
], User.prototype, "refresh_token", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TransactionHeader_entity_1.TransactionHeader]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => TransactionHeader_entity_1.TransactionHeader, trans => trans.user),
    __metadata("design:type", Array)
], User.prototype, "transactions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [CustomTransaction_entity_1.CustomTransaction]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => CustomTransaction_entity_1.CustomTransaction, customTransaction => customTransaction.user),
    __metadata("design:type", Array)
], User.prototype, "custom_transactions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [CourseTransaction_entity_1.CourseTransaction]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => CourseTransaction_entity_1.CourseTransaction, courseTransaction => courseTransaction.user),
    __metadata("design:type", Array)
], User.prototype, "course_transactions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [ChatMessage_entity_1.ChatMessage]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => ChatMessage_entity_1.ChatMessage, chatMessage => chatMessage.user),
    __metadata("design:type", Array)
], User.prototype, "chat_messages", void 0);
exports.User = User = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'users' })
], User);
