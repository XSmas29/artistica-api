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
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
class TransactionStatusSeed {
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    id: 110,
                    status: 'Pending',
                    category: 1
                },
                {
                    id: 120,
                    status: 'In Progress',
                    category: 1
                },
                {
                    id: 130,
                    status: 'Shipping',
                    category: 1
                },
                {
                    id: 140,
                    status: 'Arrived',
                    category: 1
                },
                {
                    id: 150,
                    status: 'Complaint',
                    category: 1
                },
                {
                    id: 160,
                    status: 'Completed',
                    category: 1
                },
                {
                    id: 210,
                    status: 'Pending',
                    category: 2
                },
                {
                    id: 220,
                    status: 'In Progress',
                    category: 2
                },
                {
                    id: 230,
                    status: 'Shipping',
                    category: 2
                },
                {
                    id: 240,
                    status: 'Arrived',
                    category: 2
                },
                {
                    id: 251,
                    status: 'Repair - Pending Approval',
                    category: 2
                },
                {
                    id: 252,
                    status: 'Resize - Pending Approval',
                    category: 2
                },
                {
                    id: 261,
                    status: 'Repair In Progress',
                    category: 2
                },
                {
                    id: 262,
                    status: 'Resize In Progress',
                    category: 2
                },
                {
                    id: 270,
                    status: 'Completed',
                    category: 2
                },
                {
                    id: 310,
                    status: 'Pending',
                    category: 3
                },
                {
                    id: 320,
                    status: 'Paid',
                    category: 3
                },
                // {
                //   id: 330,
                //   status: 'Completed'
                // },
            ];
            const transactionStatuses = TransactionStatus_entity_1.TransactionStatus.create(data);
            yield TransactionStatus_entity_1.TransactionStatus.save(transactionStatuses);
        });
    }
}
exports.default = TransactionStatusSeed;
