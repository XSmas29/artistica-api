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
const DeliveryProvider_entity_1 = require("@entity/DeliveryProvider.entity");
// ...
class DeliveryProviderSeed {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    id: 1,
                    name: 'JNE',
                    code: 'jne',
                },
                {
                    id: 3,
                    name: 'TIKI',
                    code: 'tiki',
                },
                {
                    id: 4,
                    name: 'POS Indonesia',
                    code: 'pos',
                }
            ];
            const providers = DeliveryProvider_entity_1.DeliveryProvider.create(data);
            yield DeliveryProvider_entity_1.DeliveryProvider.save(providers);
        });
    }
}
exports.default = DeliveryProviderSeed;
