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
exports.ResetPasswordData = exports.UpdateCustomTransactionPurchaseData = exports.UpdateCustomTransactionBasicInfoData = exports.ChatMessageData = exports.AddCustomTransactionData = exports.MaterialData = exports.CategoryData = exports.ProductData = exports.CartParams = exports.sort = exports.pagination = exports.EditPasswordData = exports.EditProfileData = exports.VerifyData = void 0;
const type_graphql_1 = require("type-graphql");
const graphql_upload_ts_1 = require("graphql-upload-ts");
let VerifyData = class VerifyData {
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
let ResetPasswordData = class ResetPasswordData {
};
exports.ResetPasswordData = ResetPasswordData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResetPasswordData.prototype, "reset_password_hash", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResetPasswordData.prototype, "new_password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ResetPasswordData.prototype, "password_confirmation", void 0);
exports.ResetPasswordData = ResetPasswordData = __decorate([
    (0, type_graphql_1.InputType)()
], ResetPasswordData);
let pagination = class pagination {
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
};
exports.AddCustomTransactionData = AddCustomTransactionData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AddCustomTransactionData.prototype, "id", void 0);
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
let UpdateCustomTransactionBasicInfoData = class UpdateCustomTransactionBasicInfoData {
};
exports.UpdateCustomTransactionBasicInfoData = UpdateCustomTransactionBasicInfoData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionBasicInfoData.prototype, "product_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionBasicInfoData.prototype, "product_description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateCustomTransactionBasicInfoData.prototype, "amount", void 0);
exports.UpdateCustomTransactionBasicInfoData = UpdateCustomTransactionBasicInfoData = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateCustomTransactionBasicInfoData);
let UpdateCustomTransactionPurchaseData = class UpdateCustomTransactionPurchaseData {
};
exports.UpdateCustomTransactionPurchaseData = UpdateCustomTransactionPurchaseData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateCustomTransactionPurchaseData.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateCustomTransactionPurchaseData.prototype, "total_price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UpdateCustomTransactionPurchaseData.prototype, "shipping_cost", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionPurchaseData.prototype, "shipping_service", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionPurchaseData.prototype, "shipping_address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UpdateCustomTransactionPurchaseData.prototype, "shipping_city", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionPurchaseData.prototype, "shipping_postal_code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionPurchaseData.prototype, "customer_phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionPurchaseData.prototype, "customer_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateCustomTransactionPurchaseData.prototype, "customer_email", void 0);
exports.UpdateCustomTransactionPurchaseData = UpdateCustomTransactionPurchaseData = __decorate([
    (0, type_graphql_1.InputType)()
], UpdateCustomTransactionPurchaseData);
let MaterialData = class MaterialData {
};
exports.MaterialData = MaterialData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MaterialData.prototype, "name", void 0);
exports.MaterialData = MaterialData = __decorate([
    (0, type_graphql_1.InputType)()
], MaterialData);
