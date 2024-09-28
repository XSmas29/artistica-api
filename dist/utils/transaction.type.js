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
exports.IncomeReportData = exports.TransactionHistoryHeader = exports.filterCustomTransaction = exports.CustomTransactionList = exports.CourseTransactionList = exports.CourseTransactionData = exports.CourseTransactionItemData = exports.TransactionList = exports.filterTransaction = exports.TransactionItemData = exports.TransactionData = exports.MTCreateTransResp = exports.CustomerDetailMT = exports.ItemDetailMT = exports.TransactionDetailMT = exports.CreditCardMT = exports.Address = void 0;
const CourseTransaction_entity_1 = require("@entity/CourseTransaction.entity");
const CustomTransaction_entity_1 = require("@entity/CustomTransaction.entity");
const TransactionHeader_entity_1 = require("@entity/TransactionHeader.entity");
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
const User_entity_1 = require("@entity/User.entity");
const type_graphql_1 = require("type-graphql");
let Address = class Address {
};
exports.Address = Address;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Address.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Address.prototype, "last_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Address.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Address.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Address.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Address.prototype, "postal_code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Address.prototype, "country_code", void 0);
exports.Address = Address = __decorate([
    (0, type_graphql_1.InputType)()
], Address);
let CreditCardMT = class CreditCardMT {
};
exports.CreditCardMT = CreditCardMT;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreditCardMT.prototype, "secure", void 0);
exports.CreditCardMT = CreditCardMT = __decorate([
    (0, type_graphql_1.InputType)()
], CreditCardMT);
let TransactionDetailMT = class TransactionDetailMT {
};
exports.TransactionDetailMT = TransactionDetailMT;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionDetailMT.prototype, "order_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionDetailMT.prototype, "gross_amount", void 0);
exports.TransactionDetailMT = TransactionDetailMT = __decorate([
    (0, type_graphql_1.InputType)()
], TransactionDetailMT);
let ItemDetailMT = class ItemDetailMT {
};
exports.ItemDetailMT = ItemDetailMT;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ItemDetailMT.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ItemDetailMT.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ItemDetailMT.prototype, "quantity", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ItemDetailMT.prototype, "name", void 0);
exports.ItemDetailMT = ItemDetailMT = __decorate([
    (0, type_graphql_1.InputType)()
], ItemDetailMT);
let CustomerDetailMT = class CustomerDetailMT {
};
exports.CustomerDetailMT = CustomerDetailMT;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerDetailMT.prototype, "first_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerDetailMT.prototype, "last_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerDetailMT.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CustomerDetailMT.prototype, "phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Address, { nullable: true }),
    __metadata("design:type", Object)
], CustomerDetailMT.prototype, "billing_address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Address, { nullable: true }),
    __metadata("design:type", Object)
], CustomerDetailMT.prototype, "shipping_address", void 0);
exports.CustomerDetailMT = CustomerDetailMT = __decorate([
    (0, type_graphql_1.InputType)()
], CustomerDetailMT);
let MTCreateTransResp = class MTCreateTransResp {
};
exports.MTCreateTransResp = MTCreateTransResp;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], MTCreateTransResp.prototype, "success", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MTCreateTransResp.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], MTCreateTransResp.prototype, "redirect_url", void 0);
exports.MTCreateTransResp = MTCreateTransResp = __decorate([
    (0, type_graphql_1.ObjectType)()
], MTCreateTransResp);
let TransactionData = class TransactionData {
};
exports.TransactionData = TransactionData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionData.prototype, "transaction_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionData.prototype, "total_price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionData.prototype, "shipping_cost", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionData.prototype, "shipping_service", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionData.prototype, "shipping_address", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionData.prototype, "shipping_city", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionData.prototype, "shipping_postal_code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionData.prototype, "customer_phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionData.prototype, "customer_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionData.prototype, "customer_email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TransactionData.prototype, "payment_method", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionData.prototype, "status", void 0);
exports.TransactionData = TransactionData = __decorate([
    (0, type_graphql_1.InputType)()
], TransactionData);
let TransactionItemData = class TransactionItemData {
};
exports.TransactionItemData = TransactionItemData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionItemData.prototype, "variant_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionItemData.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionItemData.prototype, "quantity", void 0);
exports.TransactionItemData = TransactionItemData = __decorate([
    (0, type_graphql_1.InputType)()
], TransactionItemData);
let CourseTransactionData = class CourseTransactionData {
};
exports.CourseTransactionData = CourseTransactionData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CourseTransactionData.prototype, "transaction_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], CourseTransactionData.prototype, "start_date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CourseTransactionData.prototype, "time_slot", void 0);
exports.CourseTransactionData = CourseTransactionData = __decorate([
    (0, type_graphql_1.InputType)()
], CourseTransactionData);
let CourseTransactionItemData = class CourseTransactionItemData {
};
exports.CourseTransactionItemData = CourseTransactionItemData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CourseTransactionItemData.prototype, "course_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CourseTransactionItemData.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CourseTransactionItemData.prototype, "quantity", void 0);
exports.CourseTransactionItemData = CourseTransactionItemData = __decorate([
    (0, type_graphql_1.InputType)()
], CourseTransactionItemData);
let filterTransaction = class filterTransaction {
};
exports.filterTransaction = filterTransaction;
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], filterTransaction.prototype, "status_ids", void 0);
exports.filterTransaction = filterTransaction = __decorate([
    (0, type_graphql_1.InputType)()
], filterTransaction);
let TransactionList = class TransactionList {
};
exports.TransactionList = TransactionList;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionList.prototype, "count", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TransactionHeader_entity_1.TransactionHeader]),
    __metadata("design:type", Array)
], TransactionList.prototype, "transactions", void 0);
exports.TransactionList = TransactionList = __decorate([
    (0, type_graphql_1.ObjectType)()
], TransactionList);
let TransactionHistoryImage = class TransactionHistoryImage {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionHistoryImage.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryImage.prototype, "path", void 0);
TransactionHistoryImage = __decorate([
    (0, type_graphql_1.ObjectType)()
], TransactionHistoryImage);
let TransactionHistoryProductDetail = class TransactionHistoryProductDetail {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionHistoryProductDetail.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryProductDetail.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryProductDetail.prototype, "slug", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TransactionHistoryImage]),
    __metadata("design:type", Array)
], TransactionHistoryProductDetail.prototype, "images", void 0);
TransactionHistoryProductDetail = __decorate([
    (0, type_graphql_1.ObjectType)()
], TransactionHistoryProductDetail);
let TransactionHistoryVariantDetail = class TransactionHistoryVariantDetail {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionHistoryVariantDetail.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryVariantDetail.prototype, "sku", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionHistoryVariantDetail.prototype, "stock", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TransactionHistoryImage, { nullable: true }),
    __metadata("design:type", TransactionHistoryImage)
], TransactionHistoryVariantDetail.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TransactionHistoryProductDetail),
    __metadata("design:type", TransactionHistoryProductDetail)
], TransactionHistoryVariantDetail.prototype, "product", void 0);
TransactionHistoryVariantDetail = __decorate([
    (0, type_graphql_1.ObjectType)()
], TransactionHistoryVariantDetail);
let TransactionHistoryHeader = class TransactionHistoryHeader {
};
exports.TransactionHistoryHeader = TransactionHistoryHeader;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionHistoryHeader.prototype, "total_price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], TransactionHistoryHeader.prototype, "created_at", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], TransactionHistoryHeader.prototype, "purchase_date", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "customer_email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "customer_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "customer_phone", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "payment_method", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "shipping_address", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "shipping_city", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionHistoryHeader.prototype, "shipping_cost", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "shipping_postal_code", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "shipping_service", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], TransactionHistoryHeader.prototype, "resi_number", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [TransactionHistoryDetail]),
    __metadata("design:type", Array)
], TransactionHistoryHeader.prototype, "details", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_entity_1.User),
    __metadata("design:type", User_entity_1.User)
], TransactionHistoryHeader.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TransactionStatus_entity_1.TransactionStatus),
    __metadata("design:type", TransactionStatus_entity_1.TransactionStatus)
], TransactionHistoryHeader.prototype, "status", void 0);
exports.TransactionHistoryHeader = TransactionHistoryHeader = __decorate([
    (0, type_graphql_1.ObjectType)()
], TransactionHistoryHeader);
let TransactionHistoryDetail = class TransactionHistoryDetail {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionHistoryDetail.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionHistoryDetail.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], TransactionHistoryDetail.prototype, "quantity", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => TransactionHistoryVariantDetail),
    __metadata("design:type", TransactionHistoryVariantDetail)
], TransactionHistoryDetail.prototype, "variant", void 0);
TransactionHistoryDetail = __decorate([
    (0, type_graphql_1.ObjectType)()
], TransactionHistoryDetail);
let CustomTransactionList = class CustomTransactionList {
};
exports.CustomTransactionList = CustomTransactionList;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CustomTransactionList.prototype, "count", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [CustomTransaction_entity_1.CustomTransaction]),
    __metadata("design:type", Array)
], CustomTransactionList.prototype, "custom_transactions", void 0);
exports.CustomTransactionList = CustomTransactionList = __decorate([
    (0, type_graphql_1.ObjectType)()
], CustomTransactionList);
let filterCustomTransaction = class filterCustomTransaction {
};
exports.filterCustomTransaction = filterCustomTransaction;
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], filterCustomTransaction.prototype, "status_ids", void 0);
exports.filterCustomTransaction = filterCustomTransaction = __decorate([
    (0, type_graphql_1.InputType)()
], filterCustomTransaction);
let CourseTransactionList = class CourseTransactionList {
};
exports.CourseTransactionList = CourseTransactionList;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CourseTransactionList.prototype, "count", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [CourseTransaction_entity_1.CourseTransaction]),
    __metadata("design:type", Array)
], CourseTransactionList.prototype, "course_transactions", void 0);
exports.CourseTransactionList = CourseTransactionList = __decorate([
    (0, type_graphql_1.ObjectType)()
], CourseTransactionList);
let IncomeReportData = class IncomeReportData {
};
exports.IncomeReportData = IncomeReportData;
__decorate([
    (0, type_graphql_1.Field)(() => [Number]),
    __metadata("design:type", Array)
], IncomeReportData.prototype, "transaction_income", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number]),
    __metadata("design:type", Array)
], IncomeReportData.prototype, "custom_income", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number]),
    __metadata("design:type", Array)
], IncomeReportData.prototype, "course_income", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number]),
    __metadata("design:type", Array)
], IncomeReportData.prototype, "total_income", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], IncomeReportData.prototype, "time_label", void 0);
exports.IncomeReportData = IncomeReportData = __decorate([
    (0, type_graphql_1.ObjectType)()
], IncomeReportData);
