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
exports.CustomTransaction = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const User_entity_1 = require("./User.entity");
const Image_entity_1 = require("./Image.entity");
const Chat_entity_1 = require("./Chat.entity");
const TransactionStatus_entity_1 = require("./TransactionStatus.entity");
let CustomTransaction = class CustomTransaction extends typeorm_1.BaseEntity {
    id;
    user;
    images;
    chat;
    product_name;
    product_description;
    amount;
    status;
    price;
    total_price;
    shipping_cost;
    shipping_service;
    shipping_address;
    shipping_province;
    shipping_city;
    shipping_postal_code;
    customer_phone;
    customer_name;
    customer_email;
    payment_method;
    created_at;
    updated_at;
    deleted_at;
};
exports.CustomTransaction = CustomTransaction;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CustomTransaction.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_entity_1.User),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, user => user.custom_transactions),
    __metadata("design:type", User_entity_1.User)
], CustomTransaction.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Image_entity_1.Image]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => Image_entity_1.Image, image => image.custom_transaction),
    __metadata("design:type", Array)
], CustomTransaction.prototype, "images", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Chat_entity_1.Chat),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => Chat_entity_1.Chat, chat => chat.custom_transaction),
    __metadata("design:type", Chat_entity_1.Chat)
], CustomTransaction.prototype, "chat", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CustomTransaction.prototype, "product_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: '1000', collation: 'utf8mb4_bin' }),
    __metadata("design:type", String)
], CustomTransaction.prototype, "product_description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CustomTransaction.prototype, "amount", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TransactionStatus_entity_1.TransactionStatus),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => TransactionStatus_entity_1.TransactionStatus, status => status.custom_transactions),
    __metadata("design:type", TransactionStatus_entity_1.TransactionStatus)
], CustomTransaction.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CustomTransaction.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CustomTransaction.prototype, "total_price", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CustomTransaction.prototype, "shipping_cost", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CustomTransaction.prototype, "shipping_service", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CustomTransaction.prototype, "shipping_address", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CustomTransaction.prototype, "shipping_province", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CustomTransaction.prototype, "shipping_city", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CustomTransaction.prototype, "shipping_postal_code", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CustomTransaction.prototype, "customer_phone", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CustomTransaction.prototype, "customer_name", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CustomTransaction.prototype, "customer_email", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CustomTransaction.prototype, "payment_method", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CustomTransaction.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CustomTransaction.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CustomTransaction.prototype, "deleted_at", void 0);
exports.CustomTransaction = CustomTransaction = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'custom_transactions' })
], CustomTransaction);
