"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_entity_1 = require("@entity/Category.entity");
// ...
class CategorySeed {
    async run() {
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
        await Category_entity_1.Category.save(categories);
    }
}
exports.default = CategorySeed;
