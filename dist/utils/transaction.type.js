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
exports.TransactionList = exports.filterTransaction = exports.TransactionItemData = exports.TransactionData = exports.MTCreateTransResp = exports.CustomerDetailMT = exports.ItemDetailMT = exports.TransactionDetailMT = exports.CreditCardMT = exports.Address = void 0;
const TransactionHeader_entity_1 = require("@entity/TransactionHeader.entity");
const type_graphql_1 = require("type-graphql");
let Address = class Address {
    first_name;
    last_name;
    email;
    phone;
    address;
    city;
    postal_code;
    country_code;
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
    secure;
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
    order_id;
    gross_amount;
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
    id;
    price;
    quantity;
    name;
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
    first_name;
    last_name;
    email;
    phone;
    billing_address;
    shipping_address;
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
    (0, type_graphql_1.Field)(() => Address),
    __metadata("design:type", Address)
], CustomerDetailMT.prototype, "billing_address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Address),
    __metadata("design:type", Address)
], CustomerDetailMT.prototype, "shipping_address", void 0);
exports.CustomerDetailMT = CustomerDetailMT = __decorate([
    (0, type_graphql_1.InputType)()
], CustomerDetailMT);
let MTCreateTransResp = class MTCreateTransResp {
    token;
    redirect_url;
};
exports.MTCreateTransResp = MTCreateTransResp;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MTCreateTransResp.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], MTCreateTransResp.prototype, "redirect_url", void 0);
exports.MTCreateTransResp = MTCreateTransResp = __decorate([
    (0, type_graphql_1.ObjectType)()
], MTCreateTransResp);
let TransactionData = class TransactionData {
    transaction_id;
    total_price;
    shipping_cost;
    shipping_service;
    shipping_address;
    shipping_city;
    shipping_postal_code;
    customer_phone;
    customer_name;
    customer_email;
    payment_method;
    status;
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
    variant_id;
    price;
    quantity;
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
let filterTransaction = class filterTransaction {
    status_ids;
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
    count;
    transactions;
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
