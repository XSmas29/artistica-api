"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUniqueSKU = void 0;
const Variant_entity_1 = require("@entity/Variant.entity");
const checkUniqueSKU = async (skus) => {
    const sameSKU = await Variant_entity_1.Variant.createQueryBuilder('variant')
        .where('variant.sku IN (:...skus)', { skus })
        .getMany();
    const unique = new Set(skus);
    const isUnique = unique.size === skus.length;
    if (sameSKU.length > 0 || !isUnique) {
        return false;
    }
    return true;
};
exports.checkUniqueSKU = checkUniqueSKU;
