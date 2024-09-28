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
const Material_entity_1 = require("@entity/Material.entity");
// ...
class MaterialSeed {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield Material_entity_1.Material.save(materials);
        });
    }
}
exports.default = MaterialSeed;
