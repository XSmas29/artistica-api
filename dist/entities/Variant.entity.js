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
exports.Variant = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Product_entity_1 = require("@entity/Product.entity");
const Image_entity_1 = require("@entity/Image.entity");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const VariantValue_entity_1 = require("./VariantValue.entity");
const TransactionDetail_entity_1 = require("@entity/TransactionDetail.entity");
let Variant = class Variant extends typeorm_1.BaseEntity {
    id;
    price;
    sku;
    stock;
    deleted_at;
    product;
    image;
    attribute_values;
    transaction_details;
};
exports.Variant = Variant;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Variant.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Variant.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Variant.prototype, "sku", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Variant.prototype, "stock", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Variant.prototype, "deleted_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Product_entity_1.Product),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Product_entity_1.Product, product => product.variants),
    __metadata("design:type", Product_entity_1.Product)
], Variant.prototype, "product", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Image_entity_1.Image, { nullable: true }),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => Image_entity_1.Image, image => image.variant),
    __metadata("design:type", Image_entity_1.Image)
], Variant.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [VariantValue_entity_1.VariantValue]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => VariantValue_entity_1.VariantValue, variantValue => variantValue.variant),
    __metadata("design:type", Array)
], Variant.prototype, "attribute_values", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TransactionDetail_entity_1.TransactionDetail]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => TransactionDetail_entity_1.TransactionDetail, detail => detail.variant),
    __metadata("design:type", Array)
], Variant.prototype, "transaction_details", void 0);
exports.Variant = Variant = __decorate([
    (0, type_graphql_1.ObjectType)()
    // @Index('UNIQUE_SKU', ['sku'], { unique: true, where: 'deleted_at IS NULL' })
    ,
    (0, typeorm_1.Entity)({ name: 'product_variants' })
], Variant);
