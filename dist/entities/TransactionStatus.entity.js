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
exports.TransactionStatus = void 0;
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const TransactionHeader_entity_1 = require("./TransactionHeader.entity");
const CustomTransaction_entity_1 = require("./CustomTransaction.entity");
const CourseTransaction_entity_1 = require("./CourseTransaction.entity");
let TransactionStatus = class TransactionStatus extends typeorm_1.BaseEntity {
};
exports.TransactionStatus = TransactionStatus;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TransactionStatus.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionStatus.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TransactionStatus.prototype, "category", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TransactionHeader_entity_1.TransactionHeader]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => TransactionHeader_entity_1.TransactionHeader, header => header.status),
    __metadata("design:type", Array)
], TransactionStatus.prototype, "transactions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [CustomTransaction_entity_1.CustomTransaction]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => CustomTransaction_entity_1.CustomTransaction, custom_transaction => custom_transaction.status),
    __metadata("design:type", Array)
], TransactionStatus.prototype, "custom_transactions", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [CourseTransaction_entity_1.CourseTransaction]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => CourseTransaction_entity_1.CourseTransaction, course_transaction => course_transaction.status),
    __metadata("design:type", Array)
], TransactionStatus.prototype, "course_transactions", void 0);
exports.TransactionStatus = TransactionStatus = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'transaction_statuses' })
], TransactionStatus);
