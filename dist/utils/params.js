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
exports.UpdateCustomTransactionData = exports.ChatMessageData = exports.AddCustomTransactionData = exports.MaterialData = exports.CategoryData = exports.ProductData = exports.CartParams = exports.sort = exports.pagination = exports.EditPasswordData = exports.EditProfileData = exports.VerifyData = void 0;
const type_graphql_1 = require("type-graphql");
const graphql_upload_ts_1 = require("graphql-upload-ts");
let VerifyData = class VerifyData {
    first_name;
    last_name;
    phone;
    password;
    password_confirmation;
};
exports.VerifyData = VerifyData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], VerifyData.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], VerifyData.prototype, "last_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], VerifyData.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], VerifyData.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], VerifyData.prototype, "password_confirmation", void 0);
exports.VerifyData = VerifyData = __decorate([
    (0, type_graphql_1.InputType)()
], VerifyData);
let EditProfileData = class EditProfileData {
    first_name;
    last_name;
    phone;
};
exports.EditProfileData = EditProfileData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditProfileData.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditProfileData.prototype, "last_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditProfileData.prototype, "phone", void 0);
exports.EditProfileData = EditProfileData = __decorate([
    (0, type_graphql_1.InputType)()
], EditProfileData);
let EditPasswordData = class EditPasswordData {
    old_password;
    new_password;
    password_confirmation;
};
exports.EditPasswordData = EditPasswordData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditPasswordData.prototype, "old_password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditPasswordData.prototype, "new_password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditPasswordData.prototype, "password_confirmation", void 0);
exports.EditPasswordData = EditPasswordData = __decorate([
    (0, type_graphql_1.InputType)()
], EditPasswordData);
let pagination = class pagination {
    limit;
    page;
};
exports.pagination = pagination;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], pagination.prototype, "limit", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], pagination.prototype, "page", void 0);
exports.pagination = pagination = __decorate([
    (0, type_graphql_1.InputType)()
], pagination);
let sort = class sort {
    field;
    sort;
};
exports.sort = sort;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], sort.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], sort.prototype, "sort", void 0);
exports.sort = sort = __decorate([
    (0, type_graphql_1.InputType)()
], sort);
let CartParams = class CartParams {
    product_id;
    variant_id;
    quantity;
};
exports.CartParams = CartParams;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CartParams.prototype, "product_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CartParams.prototype, "variant_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CartParams.prototype, "quantity", void 0);
exports.CartParams = CartParams = __decorate([
    (0, type_graphql_1.InputType)()
], CartParams);
let AddProductDataProduct = class AddProductDataProduct {
    name;
    description;
    category_id;
    material_id;
    images;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddProductDataProduct.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddProductDataProduct.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], AddProductDataProduct.prototype, "category_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], AddProductDataProduct.prototype, "material_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [graphql_upload_ts_1.GraphQLUpload]),
    __metadata("design:type", Array)
], AddProductDataProduct.prototype, "images", void 0);
AddProductDataProduct = __decorate([
    (0, type_graphql_1.InputType)()
], AddProductDataProduct);
let AddProductDataAttributes = class AddProductDataAttributes {
    name;
    values;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddProductDataAttributes.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], AddProductDataAttributes.prototype, "values", void 0);
AddProductDataAttributes = __decorate([
    (0, type_graphql_1.InputType)()
], AddProductDataAttributes);
let AddProductDataVariants = class AddProductDataVariants {
    price;
    stock;
    sku;
    image;
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], AddProductDataVariants.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], AddProductDataVariants.prototype, "stock", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddProductDataVariants.prototype, "sku", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => graphql_upload_ts_1.GraphQLUpload, { nullable: true }),
    __metadata("design:type", Object)
], AddProductDataVariants.prototype, "image", void 0);
AddProductDataVariants = __decorate([
    (0, type_graphql_1.InputType)()
], AddProductDataVariants);
let ProductData = class ProductData {
    product;
    attributes;
    variants;
};
exports.ProductData = ProductData;
__decorate([
    (0, type_graphql_1.Field)(() => AddProductDataProduct),
    __metadata("design:type", AddProductDataProduct)
], ProductData.prototype, "product", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [AddProductDataAttributes]),
    __metadata("design:type", Array)
], ProductData.prototype, "attributes", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [AddProductDataVariants]),
    __metadata("design:type", Array)
], ProductData.prototype, "variants", void 0);
exports.ProductData = ProductData = __decorate([
    (0, type_graphql_1.InputType)()
], ProductData);
let CategoryData = class CategoryData {
    name;
};
exports.CategoryData = CategoryData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryData.prototype, "name", void 0);
exports.CategoryData = CategoryData = __decorate([
    (0, type_graphql_1.InputType)()
], CategoryData);
let ChatMessageData = class ChatMessageData {
    message;
    image;
    chat_id;
};
exports.ChatMessageData = ChatMessageData;
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], ChatMessageData.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => graphql_upload_ts_1.GraphQLUpload, { nullable: true }),
    __metadata("design:type", Object)
], ChatMessageData.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ChatMessageData.prototype, "chat_id", void 0);
exports.ChatMessageData = ChatMessageData = __decorate([
    (0, type_graphql_1.InputType)()
], ChatMessageData);
let AddCustomTransactionData = class AddCustomTransactionData {
    images;
    product_name;
    product_description;
    amount;
};
exports.AddCustomTransactionData = AddCustomTransactionData;
__decorate([
    (0, type_graphql_1.Field)(() => [graphql_upload_ts_1.GraphQLUpload]),
    __metadata("design:type", Array)
], AddCustomTransactionData.prototype, "images", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddCustomTransactionData.prototype, "product_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddCustomTransactionData.prototype, "product_description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], AddCustomTransactionData.prototype, "amount", void 0);
exports.AddCustomTransactionData = AddCustomTransactionData = __decorate([
    (0, type_graphql_1.InputType)()
], AddCustomTransactionData);
let UpdateCustomTransactionData = class UpdateCustomTransactionData {
    product_name;
    product_description;
    amount;
};
exports.UpdateCustomTransactionData = UpdateCustomTransactionData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionData.prototype, "product_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionData.prototype, "product_description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateCustomTransactionData.prototype, "amount", void 0);
exports.UpdateCustomTransactionData = UpdateCustomTransactionData = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateCustomTransactionData);
let MaterialData = class MaterialData {
    name;
};
exports.MaterialData = MaterialData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MaterialData.prototype, "name", void 0);
exports.MaterialData = MaterialData = __decorate([
    (0, type_graphql_1.InputType)()
], MaterialData);
