"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Material_entity_1 = require("@entity/Material.entity");
// ...
class MaterialSeed {
    async run() {
        const data = [
            {
                id: 1,
                name: 'Silver 925',
            },
            {
                id: 2,
                name: 'Brass & Bronze',
            },
            {
                id: 3,
                name: 'Beads & Gemstones',
            },
            {
                id: 4,
                name: 'Stainless Steel',
            },
        ];
        const materials = Material_entity_1.Material.create(data);
        await Material_entity_1.Material.save(materials);
    }
}
exports.default = MaterialSeed;
