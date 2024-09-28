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
const Attribute_entity_1 = require("@entity/Attribute.entity");
const AttributeOption_entity_1 = require("@entity/AttributeOption.entity");
const Variant_entity_1 = require("@entity/Variant.entity");
const VariantValue_entity_1 = require("@entity/VariantValue.entity");
// ...
class VariantValueSeed {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    id: 1,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 17 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 1 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 1 } }),
                },
                {
                    id: 2,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 18 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 1 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 2 } }),
                },
                {
                    id: 3,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 21 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 2 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 3 } }),
                },
                {
                    id: 4,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 22 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 2 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 4 } }),
                },
                {
                    id: 5,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 23 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 3 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 5 } }),
                },
                {
                    id: 6,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 24 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 3 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 6 } }),
                },
                {
                    id: 7,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 25 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 4 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 7 } }),
                },
                {
                    id: 8,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 26 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 4 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 9,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 27 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 5 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 10,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 28 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 5 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 10 } }),
                },
                {
                    id: 11,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 29 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 5 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 11 } }),
                },
                {
                    id: 12,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 30 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 6 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 12 } }),
                },
                {
                    id: 13,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 31 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 6 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 13 } }),
                },
                {
                    id: 14,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 32 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 7 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 14 } }),
                },
                {
                    id: 15,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 33 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 7 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 15 } }),
                },
                {
                    id: 16,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 34 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 7 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 16 } }),
                },
                {
                    id: 17,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 42 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 17 } }),
                },
                {
                    id: 18,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 43 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 18 } }),
                },
                {
                    id: 19,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 44 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 19 } }),
                },
                {
                    id: 20,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 45 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 20 } }),
                },
                {
                    id: 21,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 46 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 21 } }),
                },
                {
                    id: 22,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 47 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 22 } }),
                },
                {
                    id: 23,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 48 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 23 } }),
                },
                {
                    id: 24,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 49 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 24 } }),
                },
                {
                    id: 25,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 50 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 25 } }),
                },
                {
                    id: 26,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 51 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 26 } }),
                },
                {
                    id: 27,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 52 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 27 } }),
                },
                {
                    id: 28,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 53 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 28 } }),
                },
                {
                    id: 29,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 54 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 29 } }),
                },
                {
                    id: 30,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 55 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 30 } }),
                },
                {
                    id: 31,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 56 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 31 } }),
                },
                {
                    id: 32,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 57 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 32 } }),
                },
                {
                    id: 33,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 104 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 33 } }),
                },
                {
                    id: 34,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 105 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 34 } }),
                },
                {
                    id: 35,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 106 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 35 } }),
                },
                {
                    id: 36,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 107 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 36 } }),
                },
                {
                    id: 37,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 108 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 37 } }),
                },
                {
                    id: 38,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 109 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 38 } }),
                },
                {
                    id: 39,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 110 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 39 } }),
                },
                {
                    id: 40,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 111 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 40 } }),
                },
                {
                    id: 41,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 112 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 41 } }),
                },
                {
                    id: 42,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 113 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 42 } }),
                },
                {
                    id: 43,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 114 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 43 } }),
                },
                {
                    id: 44,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 115 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 44 } }),
                },
                {
                    id: 45,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 125 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 10 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 45 } }),
                },
                {
                    id: 46,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 126 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 10 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 46 } }),
                },
                {
                    id: 47,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 127 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 11 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 47 } }),
                },
                {
                    id: 48,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 128 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 11 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 48 } }),
                },
                {
                    id: 49,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 129 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 11 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 49 } }),
                },
                {
                    id: 50,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 131 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 12 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 50 } }),
                },
                {
                    id: 51,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 132 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 12 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 51 } }),
                },
                {
                    id: 52,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 133 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 13 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 52 } }),
                },
                {
                    id: 53,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 134 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 13 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 53 } }),
                },
                {
                    id: 54,
                    variant: yield Variant_entity_1.Variant.findOneOrFail({ where: { id: 135 } }),
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 13 } }),
                    option: yield AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 54 } }),
                },
            ];
            const values = VariantValue_entity_1.VariantValue.create(data);
            yield VariantValue_entity_1.VariantValue.save(values);
        });
    }
}
exports.default = VariantValueSeed;
