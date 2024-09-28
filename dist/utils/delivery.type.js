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
exports.DeliveryService = exports.ParamDeliveryService = void 0;
const type_graphql_1 = require("type-graphql");
let ParamDeliveryService = class ParamDeliveryService {
};
exports.ParamDeliveryService = ParamDeliveryService;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ParamDeliveryService.prototype, "origin", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ParamDeliveryService.prototype, "destination", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ParamDeliveryService.prototype, "weight", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], ParamDeliveryService.prototype, "courier", void 0);
exports.ParamDeliveryService = ParamDeliveryService = __decorate([
    (0, type_graphql_1.InputType)()
], ParamDeliveryService);
let DeliveryService = class DeliveryService {
};
exports.DeliveryService = DeliveryService;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DeliveryService.prototype, "service", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DeliveryService.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], DeliveryService.prototype, "cost", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DeliveryService.prototype, "etd", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], DeliveryService.prototype, "note", void 0);
exports.DeliveryService = DeliveryService = __decorate([
    (0, type_graphql_1.ObjectType)()
], DeliveryService);
