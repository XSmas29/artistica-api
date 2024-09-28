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
exports.TransactionHeader = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const User_entity_1 = require("./User.entity");
const TransactionDetail_entity_1 = require("@entity/TransactionDetail.entity");
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
let TransactionHeader = class TransactionHeader extends typeorm_1.BaseEntity {
    capitalizeShipping() {
        return __awaiter(this, void 0, void 0, function* () {
            this.shipping_service = this.shipping_service.toUpperCase();
        });
    }
};
exports.TransactionHeader = TransactionHeader;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], TransactionHeader.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_entity_1.User),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => User_entity_1.User, user => user.transactions),
    __metadata("design:type", User_entity_1.User)
], TransactionHeader.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TransactionDetail_entity_1.TransactionDetail]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => TransactionDetail_entity_1.TransactionDetail, detail => detail.header),
    __metadata("design:type", Array)
], TransactionHeader.prototype, "details", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TransactionStatus_entity_1.TransactionStatus),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => TransactionStatus_entity_1.TransactionStatus, status => status.transactions),
    __metadata("design:type", TransactionStatus_entity_1.TransactionStatus)
], TransactionHeader.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TransactionHeader.prototype, "total_price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TransactionHeader.prototype, "shipping_cost", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionHeader.prototype, "resi_number", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionHeader.prototype, "shipping_service", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionHeader.prototype, "shipping_address", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionHeader.prototype, "shipping_city", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionHeader.prototype, "shipping_postal_code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionHeader.prototype, "customer_phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionHeader.prototype, "customer_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TransactionHeader.prototype, "customer_email", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TransactionHeader.prototype, "payment_method", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], TransactionHeader.prototype, "purchase_date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TransactionHeader.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TransactionHeader.prototype, "updated_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], TransactionHeader.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionHeader.prototype, "capitalizeShipping", null);
exports.TransactionHeader = TransactionHeader = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'transaction_headers' })
], TransactionHeader);
