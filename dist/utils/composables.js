"use strict";
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
exports.checkUniqueSKU = void 0;
const Variant_entity_1 = require("@entity/Variant.entity");
const checkUniqueSKU = (skus, current_product_id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(skus);
    const query = Variant_entity_1.Variant.createQueryBuilder('variant')
        .where('variant.sku IN (:...skus)', { skus });
    current_product_id && query.andWhere('variant.product != :product', { product: current_product_id });
    const sameSKU = yield query.getMany();
    console.log(sameSKU);
    const unique = new Set(skus);
    const isUnique = unique.size === skus.length;
    if (sameSKU.length > 0 || !isUnique)
        return false;
    else
        return true;
});
exports.checkUniqueSKU = checkUniqueSKU;
