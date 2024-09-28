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
const Category_entity_1 = require("@entity/Category.entity");
// ...
class CategorySeed {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    id: 1,
                    name: 'Ring',
                },
                {
                    id: 2,
                    name: 'Bracellet',
                },
                {
                    id: 3,
                    name: 'Necklace',
                },
                {
                    id: 4,
                    name: 'Earrings',
                },
                {
                    id: 5,
                    name: 'Pendant',
                },
                {
                    id: 6,
                    name: 'Others',
                },
            ];
            const categories = Category_entity_1.Category.create(data);
            yield Category_entity_1.Category.save(categories);
        });
    }
}
exports.default = CategorySeed;
