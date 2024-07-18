"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DeliveryProvider_entity_1 = require("@entity/DeliveryProvider.entity");
// ...
class DeliveryProviderSeed {
    async run() {
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
        await DeliveryProvider_entity_1.DeliveryProvider.save(providers);
    }
}
exports.default = DeliveryProviderSeed;
