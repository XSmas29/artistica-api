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
exports.CourseTransaction = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_entity_1 = require("./User.entity");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const Course_entity_1 = require("./Course.entity");
const TransactionStatus_entity_1 = require("./TransactionStatus.entity");
let CourseTransaction = class CourseTransaction extends typeorm_1.BaseEntity {
};
exports.CourseTransaction = CourseTransaction;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], CourseTransaction.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_entity_1.User),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, user => user.course_transactions),
    __metadata("design:type", User_entity_1.User)
], CourseTransaction.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Course_entity_1.Course, course => course.course_transactions),
    __metadata("design:type", Course_entity_1.Course)
], CourseTransaction.prototype, "course", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseTransaction.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseTransaction.prototype, "amount", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], CourseTransaction.prototype, "total_price", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CourseTransaction.prototype, "payment_method", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TransactionStatus_entity_1.TransactionStatus),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => TransactionStatus_entity_1.TransactionStatus, status => status.course_transactions),
    __metadata("design:type", TransactionStatus_entity_1.TransactionStatus)
], CourseTransaction.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CourseTransaction.prototype, "start_date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CourseTransaction.prototype, "time_slot", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], CourseTransaction.prototype, "purchase_date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CourseTransaction.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CourseTransaction.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CourseTransaction.prototype, "deleted_at", void 0);
exports.CourseTransaction = CourseTransaction = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'course_transactions' })
], CourseTransaction);
