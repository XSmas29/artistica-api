"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const Attribute_entity_1 = require("@entity/Attribute.entity");
const Product_entity_1 = require("@entity/Product.entity");
dotenv_1.default.config();
// ...
class AttributeSeed {
    async run() {
        const data = [
            {
                id: 1,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 17 } }),
            },
            {
                id: 2,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 20 } }),
            },
            {
                id: 3,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 21 } }),
            },
            {
                id: 4,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 22 } }),
            },
            {
                id: 5,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 23 } }),
            },
            {
                id: 6,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 24 } }),
            },
            {
                id: 7,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 25 } }),
            },
            {
                id: 8,
                name: 'Type',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 33 } }),
            },
            {
                id: 9,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 80 } }),
            },
            {
                id: 10,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 90 } }),
            },
            {
                id: 11,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 91 } }),
            },
            {
                id: 12,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 93 } }),
            },
            {
                id: 13,
                name: 'Color',
                product: await Product_entity_1.Product.findOneOrFail({ where: { id: 94 } }),
            },
        ];
        const options = Attribute_entity_1.Attribute.create(data);
        await Attribute_entity_1.Attribute.save(options);
    }
}
exports.default = AttributeSeed;
