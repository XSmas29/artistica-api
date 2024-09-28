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
exports.CartData = exports.filterProducts = exports.ProductList = void 0;
const Product_entity_1 = require("@entity/Product.entity");
const Variant_entity_1 = require("@entity/Variant.entity");
const type_graphql_1 = require("type-graphql");
let ProductList = class ProductList {
};
exports.ProductList = ProductList;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ProductList.prototype, "count", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Product_entity_1.Product]),
    __metadata("design:type", Array)
], ProductList.prototype, "products", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], ProductList.prototype, "price_min", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], ProductList.prototype, "price_max", void 0);
exports.ProductList = ProductList = __decorate([
    (0, type_graphql_1.ObjectType)()
], ProductList);
let filterProducts = class filterProducts {
};
exports.filterProducts = filterProducts;
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Object)
], filterProducts.prototype, "price_min", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true }),
    __metadata("design:type", Object)
], filterProducts.prototype, "price_max", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], filterProducts.prototype, "category_ids", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], filterProducts.prototype, "material_ids", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], filterProducts.prototype, "search", void 0);
exports.filterProducts = filterProducts = __decorate([
    (0, type_graphql_1.InputType)()
], filterProducts);
let CartData = class CartData {
};
exports.CartData = CartData;
__decorate([
    (0, type_graphql_1.Field)(() => Variant_entity_1.Variant),
    __metadata("design:type", Variant_entity_1.Variant)
], CartData.prototype, "variant", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Number),
    __metadata("design:type", Number)
], CartData.prototype, "quantity", void 0);
exports.CartData = CartData = __decorate([
    (0, type_graphql_1.ObjectType)()
], CartData);
