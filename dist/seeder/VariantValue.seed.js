"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Attribute_entity_1 = require("@entity/Attribute.entity");
const AttributeOption_entity_1 = require("@entity/AttributeOption.entity");
const Variant_entity_1 = require("@entity/Variant.entity");
const VariantValue_entity_1 = require("@entity/VariantValue.entity");
// ...
class VariantValueSeed {
    async run() {
        const data = [
            {
                id: 1,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 17 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 1 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 1 } }),
            },
            {
                id: 2,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 18 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 1 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 2 } }),
            },
            {
                id: 3,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 21 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 2 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 3 } }),
            },
            {
                id: 4,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 22 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 2 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 4 } }),
            },
            {
                id: 5,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 23 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 3 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 5 } }),
            },
            {
                id: 6,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 24 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 3 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 6 } }),
            },
            {
                id: 7,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 25 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 4 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 7 } }),
            },
            {
                id: 8,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 26 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 4 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 8 } }),
            },
            {
                id: 9,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 27 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 5 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 9 } }),
            },
            {
                id: 10,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 28 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 5 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 10 } }),
            },
            {
                id: 11,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 29 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 5 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 11 } }),
            },
            {
                id: 12,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 30 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 6 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 12 } }),
            },
            {
                id: 13,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 31 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 6 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 13 } }),
            },
            {
                id: 14,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 32 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 7 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 14 } }),
            },
            {
                id: 15,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 33 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 7 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 15 } }),
            },
            {
                id: 16,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 34 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 7 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 16 } }),
            },
            {
                id: 17,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 42 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 17 } }),
            },
            {
                id: 18,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 43 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 18 } }),
            },
            {
                id: 19,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 44 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 19 } }),
            },
            {
                id: 20,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 45 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 20 } }),
            },
            {
                id: 21,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 46 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 21 } }),
            },
            {
                id: 22,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 47 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 22 } }),
            },
            {
                id: 23,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 48 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 23 } }),
            },
            {
                id: 24,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 49 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 24 } }),
            },
            {
                id: 25,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 50 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 25 } }),
            },
            {
                id: 26,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 51 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 26 } }),
            },
            {
                id: 27,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 52 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 27 } }),
            },
            {
                id: 28,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 53 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 28 } }),
            },
            {
                id: 29,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 54 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 29 } }),
            },
            {
                id: 30,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 55 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 30 } }),
            },
            {
                id: 31,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 56 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 31 } }),
            },
            {
                id: 32,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 57 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 32 } }),
            },
            {
                id: 33,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 104 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 33 } }),
            },
            {
                id: 34,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 105 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 34 } }),
            },
            {
                id: 35,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 106 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 35 } }),
            },
            {
                id: 36,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 107 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 36 } }),
            },
            {
                id: 37,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 108 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 37 } }),
            },
            {
                id: 38,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 109 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 38 } }),
            },
            {
                id: 39,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 110 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 39 } }),
            },
            {
                id: 40,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 111 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 40 } }),
            },
            {
                id: 41,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 112 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 41 } }),
            },
            {
                id: 42,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 113 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 42 } }),
            },
            {
                id: 43,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 114 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 43 } }),
            },
            {
                id: 44,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 115 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 44 } }),
            },
            {
                id: 45,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 125 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 10 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 45 } }),
            },
            {
                id: 46,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 126 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 10 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 46 } }),
            },
            {
                id: 47,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 127 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 11 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 47 } }),
            },
            {
                id: 48,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 128 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 11 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 48 } }),
            },
            {
                id: 49,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 129 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 11 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 49 } }),
            },
            {
                id: 50,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 131 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 12 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 50 } }),
            },
            {
                id: 51,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 132 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 12 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 51 } }),
            },
            {
                id: 52,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 133 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 13 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 52 } }),
            },
            {
                id: 53,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 134 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 13 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 53 } }),
            },
            {
                id: 54,
                variant: await Variant_entity_1.Variant.findOneOrFail({ where: { id: 135 } }),
                attribute: await Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 13 } }),
                option: await AttributeOption_entity_1.AttributeOption.findOneOrFail({ where: { id: 54 } }),
            },
        ];
        const values = VariantValue_entity_1.VariantValue.create(data);
        await VariantValue_entity_1.VariantValue.save(values);
    }
}
exports.default = VariantValueSeed;
