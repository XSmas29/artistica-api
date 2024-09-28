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
const AttributeOption_entity_1 = require("@entity/AttributeOption.entity");
const Attribute_entity_1 = require("@entity/Attribute.entity");
dotenv_1.default.config();
// ...
class AttributeOptionSeed {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    id: 1,
                    name: 'Gold',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 1 } }),
                },
                {
                    id: 2,
                    name: 'Rose',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 1 } }),
                },
                {
                    id: 3,
                    name: 'Gold',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 2 } }),
                },
                {
                    id: 4,
                    name: 'Silver',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 2 } }),
                },
                {
                    id: 5,
                    name: 'Black',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 3 } }),
                },
                {
                    id: 6,
                    name: 'White',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 3 } }),
                },
                {
                    id: 7,
                    name: 'Rose',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 4 } }),
                },
                {
                    id: 8,
                    name: 'Gold',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 4 } }),
                },
                {
                    id: 9,
                    name: 'Rose',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 5 } }),
                },
                {
                    id: 10,
                    name: 'Gold',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 5 } }),
                },
                {
                    id: 11,
                    name: 'Silver',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 5 } }),
                },
                {
                    id: 12,
                    name: 'Rose',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 6 } }),
                },
                {
                    id: 13,
                    name: 'Silver',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 6 } }),
                },
                {
                    id: 14,
                    name: 'Gold',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 7 } }),
                },
                {
                    id: 15,
                    name: 'Silver',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 7 } }),
                },
                {
                    id: 16,
                    name: 'Rose',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 7 } }),
                },
                {
                    id: 17,
                    name: '01',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 18,
                    name: '02',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 19,
                    name: '03',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 20,
                    name: '04',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 21,
                    name: '05',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 22,
                    name: '06',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 23,
                    name: '07',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 24,
                    name: '08',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 25,
                    name: '09',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 26,
                    name: '10',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 27,
                    name: '11',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 28,
                    name: '12',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 29,
                    name: '13',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 30,
                    name: '14',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 31,
                    name: '15',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 32,
                    name: '16',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 8 } }),
                },
                {
                    id: 33,
                    name: 'Merah Garnet',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 34,
                    name: 'Ungu Amethyst',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 35,
                    name: 'Biru Aquamarine',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 36,
                    name: 'Putih Diamond',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 37,
                    name: 'Hijau Emerald',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 38,
                    name: 'Putih Moonstone',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 39,
                    name: 'Biru Sapphire',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 40,
                    name: 'Yellow Citrine',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 41,
                    name: 'Hijau Peridot',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 42,
                    name: 'Green Turquoise',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 43,
                    name: 'Pink Ruby',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 44,
                    name: 'Black Tourmaline',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 9 } }),
                },
                {
                    id: 45,
                    name: 'Rose',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 10 } }),
                },
                {
                    id: 46,
                    name: 'Gold',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 10 } }),
                },
                {
                    id: 47,
                    name: 'Gold',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 11 } }),
                },
                {
                    id: 48,
                    name: 'Rose',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 11 } }),
                },
                {
                    id: 49,
                    name: 'Silver',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 11 } }),
                },
                {
                    id: 50,
                    name: 'Gold',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 12 } }),
                },
                {
                    id: 51,
                    name: 'Rose',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 12 } }),
                },
                {
                    id: 52,
                    name: 'Gold',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 13 } }),
                },
                {
                    id: 53,
                    name: 'Rose',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 13 } }),
                },
                {
                    id: 54,
                    name: 'Silver',
                    attribute: yield Attribute_entity_1.Attribute.findOneOrFail({ where: { id: 13 } }),
                },
            ];
            const values = AttributeOption_entity_1.AttributeOption.create(data);
            yield AttributeOption_entity_1.AttributeOption.save(values);
        });
    }
}
exports.default = AttributeOptionSeed;
