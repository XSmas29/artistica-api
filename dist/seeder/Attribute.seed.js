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
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    id: 1,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 17 } }),
                },
                {
                    id: 2,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 20 } }),
                },
                {
                    id: 3,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 21 } }),
                },
                {
                    id: 4,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 22 } }),
                },
                {
                    id: 5,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 23 } }),
                },
                {
                    id: 6,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 24 } }),
                },
                {
                    id: 7,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 25 } }),
                },
                {
                    id: 8,
                    name: 'Type',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 33 } }),
                },
                {
                    id: 9,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 80 } }),
                },
                {
                    id: 10,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 90 } }),
                },
                {
                    id: 11,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 91 } }),
                },
                {
                    id: 12,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 93 } }),
                },
                {
                    id: 13,
                    name: 'Color',
                    product: yield Product_entity_1.Product.findOneOrFail({ where: { id: 94 } }),
                },
            ];
            const options = Attribute_entity_1.Attribute.create(data);
            yield Attribute_entity_1.Attribute.save(options);
        });
    }
}
exports.default = AttributeSeed;
