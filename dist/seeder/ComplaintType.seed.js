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
const ComplaintType_entity_1 = require("@entity/ComplaintType.entity");
// ...
class ComplaintTypeSeed {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    id: 1,
                    name: 'Repair',
                },
                {
                    id: 2,
                    name: 'Resize',
                },
            ];
            const types = ComplaintType_entity_1.ComplaintType.create(data);
            yield ComplaintType_entity_1.ComplaintType.save(types);
        });
    }
}
exports.default = ComplaintTypeSeed;
