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
exports.VariantValue = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const Variant_entity_1 = require("./Variant.entity");
const Attribute_entity_1 = require("./Attribute.entity");
const AttributeOption_entity_1 = require("./AttributeOption.entity");
let VariantValue = class VariantValue extends typeorm_1.BaseEntity {
    id;
    deleted_at;
    variant;
    attribute;
    option;
};
exports.VariantValue = VariantValue;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VariantValue.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], VariantValue.prototype, "deleted_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Variant_entity_1.Variant),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Variant_entity_1.Variant, variant => variant.attribute_values),
    __metadata("design:type", Variant_entity_1.Variant)
], VariantValue.prototype, "variant", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Attribute_entity_1.Attribute),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Attribute_entity_1.Attribute, attribute => attribute.attribute_values),
    __metadata("design:type", Attribute_entity_1.Attribute)
], VariantValue.prototype, "attribute", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => AttributeOption_entity_1.AttributeOption),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => AttributeOption_entity_1.AttributeOption, attributeOption => attributeOption.attribute_values),
    __metadata("design:type", AttributeOption_entity_1.AttributeOption)
], VariantValue.prototype, "option", void 0);
exports.VariantValue = VariantValue = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'product_variant_values' })
], VariantValue);
