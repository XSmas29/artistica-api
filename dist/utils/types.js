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
exports.City = exports.Province = exports.LoginResponse = exports.AuthToken = exports.ServerResponse = void 0;
const type_graphql_1 = require("type-graphql");
// Define a type for the server response data
let ServerResponse = class ServerResponse {
    success;
    message;
    data;
};
exports.ServerResponse = ServerResponse;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ServerResponse.prototype, "success", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ServerResponse.prototype, "message", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], ServerResponse.prototype, "data", void 0);
exports.ServerResponse = ServerResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], ServerResponse);
let LoginResponse = class LoginResponse extends ServerResponse {
    token;
    refresh_token;
};
exports.LoginResponse = LoginResponse;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginResponse.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginResponse.prototype, "refresh_token", void 0);
exports.LoginResponse = LoginResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], LoginResponse);
let AuthToken = class AuthToken {
    token;
    refresh_token;
};
exports.AuthToken = AuthToken;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AuthToken.prototype, "token", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AuthToken.prototype, "refresh_token", void 0);
exports.AuthToken = AuthToken = __decorate([
    (0, type_graphql_1.ObjectType)()
], AuthToken);
let Province = class Province {
    province_id;
    province;
};
exports.Province = Province;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Province.prototype, "province_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Province.prototype, "province", void 0);
exports.Province = Province = __decorate([
    (0, type_graphql_1.ObjectType)()
], Province);
let City = class City {
    city_id;
    province_id;
    province;
    type;
    city_name;
    postal_code;
};
exports.City = City;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], City.prototype, "city_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], City.prototype, "province_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], City.prototype, "province", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], City.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], City.prototype, "city_name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], City.prototype, "postal_code", void 0);
exports.City = City = __decorate([
    (0, type_graphql_1.ObjectType)()
], City);
