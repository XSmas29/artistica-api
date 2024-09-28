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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryResolver = void 0;
const DeliveryProvider_entity_1 = require("@entity/DeliveryProvider.entity");
const rajaongkir_api_1 = __importDefault(require("@utils/api/rajaongkir.api"));
const delivery_type_1 = require("@utils/delivery.type");
const types_1 = require("@utils/types");
const type_graphql_1 = require("type-graphql");
let DeliveryResolver = class DeliveryResolver {
    provinces() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield rajaongkir_api_1.default.getProvinces();
        });
    }
    cities(provinceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield rajaongkir_api_1.default.getCities(provinceId);
        });
    }
    deliveryProviders() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield DeliveryProvider_entity_1.DeliveryProvider.find();
        });
    }
    deliveryServices(param) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = yield rajaongkir_api_1.default.getCost(param.origin, param.destination, param.weight, param.courier);
            return services;
        });
    }
};
exports.DeliveryResolver = DeliveryResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [types_1.Province]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeliveryResolver.prototype, "provinces", null);
__decorate([
    (0, type_graphql_1.Query)(() => [types_1.City]),
    __param(0, (0, type_graphql_1.Arg)('provinceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DeliveryResolver.prototype, "cities", null);
__decorate([
    (0, type_graphql_1.Query)(() => [DeliveryProvider_entity_1.DeliveryProvider]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DeliveryResolver.prototype, "deliveryProviders", null);
__decorate([
    (0, type_graphql_1.Query)(() => [delivery_type_1.DeliveryService]),
    __param(0, (0, type_graphql_1.Arg)('param')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delivery_type_1.ParamDeliveryService]),
    __metadata("design:returntype", Promise)
], DeliveryResolver.prototype, "deliveryServices", null);
exports.DeliveryResolver = DeliveryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DeliveryResolver);
