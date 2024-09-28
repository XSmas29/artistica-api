"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantResolver = void 0;
const Image_entity_1 = require("@entity/Image.entity");
const Variant_entity_1 = require("@entity/Variant.entity");
const type_graphql_1 = require("type-graphql");
const env = __importStar(require("env-var"));
const params_1 = require("@utils/params");
const product_type_1 = require("@utils/product.type");
const errors_1 = require("@utils/errors");
let VariantResolver = class VariantResolver {
    image(root) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield Image_entity_1.Image.createQueryBuilder('img')
                .leftJoinAndSelect('img.variant', 'variant')
                .where('img.variant = :id', { id: root.id })
                .getOne();
            if (image) {
                const base_url = env.get('BASE_URL').required().asString();
                image.path = `${base_url}/variants/${image.variant.id.toString()}/${image.path}`;
            }
            return image;
        });
    }
    cartData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const variant_ids = data.map(d => d.variant_id);
            const variants = yield Variant_entity_1.Variant.createQueryBuilder('var')
                .whereInIds(variant_ids)
                .getMany();
            const ret = data.map(d => {
                const variant = variants.find(v => v.id === d.variant_id);
                if (!variant) {
                    throw new errors_1.NotFoundError('Variant tidak ditemukan');
                }
                return {
                    variant,
                    quantity: d.quantity,
                };
            });
            return ret;
        });
    }
    variantDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const variant = yield Variant_entity_1.Variant.createQueryBuilder('var')
                .withDeleted()
                .where('var.id = :id', { id })
                .getOneOrFail();
            return variant;
        });
    }
};
exports.VariantResolver = VariantResolver;
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Variant_entity_1.Variant]),
    __metadata("design:returntype", Promise)
], VariantResolver.prototype, "image", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER']),
    (0, type_graphql_1.Query)(() => [product_type_1.CartData]),
    __param(0, (0, type_graphql_1.Arg)('data', () => [params_1.CartParams])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], VariantResolver.prototype, "cartData", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER']),
    (0, type_graphql_1.Query)(() => Variant_entity_1.Variant),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VariantResolver.prototype, "variantDetail", null);
exports.VariantResolver = VariantResolver = __decorate([
    (0, type_graphql_1.Resolver)(Variant_entity_1.Variant)
], VariantResolver);
