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
exports.TransactionDetail = void 0;
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const TransactionHeader_entity_1 = require("./TransactionHeader.entity");
const Variant_entity_1 = require("./Variant.entity");
let TransactionDetail = class TransactionDetail extends typeorm_1.BaseEntity {
};
exports.TransactionDetail = TransactionDetail;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TransactionDetail.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TransactionHeader_entity_1.TransactionHeader),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => TransactionHeader_entity_1.TransactionHeader, header => header.details),
    __metadata("design:type", TransactionHeader_entity_1.TransactionHeader)
], TransactionDetail.prototype, "header", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Variant_entity_1.Variant),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Variant_entity_1.Variant, variant => variant.transaction_details),
    __metadata("design:type", Variant_entity_1.Variant)
], TransactionDetail.prototype, "variant", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TransactionDetail.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TransactionDetail.prototype, "quantity", void 0);
exports.TransactionDetail = TransactionDetail = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'transaction_details' })
], TransactionDetail);
