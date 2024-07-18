"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
class TransactionStatusSeed {
    async run() {
        const data = [
            {
                id: 1,
                status: 'Pending'
            },
            {
                id: 2,
                status: 'In Progress'
            },
            {
                id: 3,
                status: 'Shipping'
            },
            {
                id: 4,
                status: 'Arrived'
            },
            {
                id: 5,
                status: 'Complaint'
            },
            {
                id: 6,
                status: 'Completed'
            }
        ];
        const transactionStatuses = TransactionStatus_entity_1.TransactionStatus.create(data);
        await TransactionStatus_entity_1.TransactionStatus.save(transactionStatuses);
    }
}
exports.default = TransactionStatusSeed;
