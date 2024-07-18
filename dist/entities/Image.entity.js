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
exports.Image = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Variant_entity_1 = require("@entity/Variant.entity");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const Product_entity_1 = require("@entity/Product.entity");
const CustomTransaction_entity_1 = require("./CustomTransaction.entity");
let Image = class Image extends typeorm_1.BaseEntity {
    id;
    path;
    variant;
    product;
    custom_transaction;
};
exports.Image = Image;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Image.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Image.prototype, "path", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Variant_entity_1.Variant, { nullable: true }),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToOne)(() => Variant_entity_1.Variant, variant => variant.image),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], Image.prototype, "variant", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Product_entity_1.Product, { nullable: true }),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Product_entity_1.Product, product => product.images),
    __metadata("design:type", Object)
], Image.prototype, "product", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => CustomTransaction_entity_1.CustomTransaction, { nullable: true }),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => CustomTransaction_entity_1.CustomTransaction, customTransaction => customTransaction.images),
    __metadata("design:type", Object)
], Image.prototype, "custom_transaction", void 0);
exports.Image = Image = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'product_images' })
], Image);
