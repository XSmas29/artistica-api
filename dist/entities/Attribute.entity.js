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
exports.Attribute = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Product_entity_1 = require("@entity/Product.entity");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const AttributeOption_entity_1 = require("./AttributeOption.entity");
const VariantValue_entity_1 = require("./VariantValue.entity");
let Attribute = class Attribute extends typeorm_1.BaseEntity {
};
exports.Attribute = Attribute;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Attribute.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Attribute.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Attribute.prototype, "deleted_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Product_entity_1.Product),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Product_entity_1.Product, product => product.attributes),
    __metadata("design:type", Product_entity_1.Product)
], Attribute.prototype, "product", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [AttributeOption_entity_1.AttributeOption]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => AttributeOption_entity_1.AttributeOption, attributeOption => attributeOption.attribute),
    __metadata("design:type", Array)
], Attribute.prototype, "options", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [VariantValue_entity_1.VariantValue]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => VariantValue_entity_1.VariantValue, variantValue => variantValue.attribute),
    __metadata("design:type", Array)
], Attribute.prototype, "attribute_values", void 0);
exports.Attribute = Attribute = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'product_attributes' })
], Attribute);
