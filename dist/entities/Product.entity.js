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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Variant_entity_1 = require("@entity/Variant.entity");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const Image_entity_1 = require("@entity/Image.entity");
const Category_entity_1 = require("@entity/Category.entity");
const Material_entity_1 = require("@entity/Material.entity");
const Attribute_entity_1 = require("./Attribute.entity");
let Product = class Product extends typeorm_1.BaseEntity {
    id;
    name;
    description;
    slug;
    single_variant;
    deleted_at;
    category;
    material;
    attributes;
    variants;
    images;
};
exports.Product = Product;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ length: '1000', collation: 'utf8mb4_bin' }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "slug", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Product.prototype, "single_variant", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "deleted_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Category_entity_1.Category),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Category_entity_1.Category, category => category.products),
    __metadata("design:type", Category_entity_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Material_entity_1.Material),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => Material_entity_1.Material, material => material.products),
    __metadata("design:type", Material_entity_1.Material)
], Product.prototype, "material", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Attribute_entity_1.Attribute]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => Attribute_entity_1.Attribute, attribute => attribute.product),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Product.prototype, "attributes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Variant_entity_1.Variant]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => Variant_entity_1.Variant, variant => variant.product),
    __metadata("design:type", Array)
], Product.prototype, "variants", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Image_entity_1.Image]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => Image_entity_1.Image, image => image.product),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
exports.Product = Product = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'products' })
], Product);
