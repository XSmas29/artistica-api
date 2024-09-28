"use strict";
//create a cron job everyday at 00:00
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
exports.checkCustomTransactionStatusCronJob = void 0;
const CustomTransaction_entity_1 = require("@entity/CustomTransaction.entity");
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
const cron_1 = require("cron");
const checkCustomTransactionStatusCronJob = new cron_1.CronJob('0 0 * * *', // cronTime
function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Cron Job Running');
        //
        const customTransactions = yield CustomTransaction_entity_1.CustomTransaction.createQueryBuilder('custom_transaction')
            .where('custom_transaction.status = :status', { status: 240 })
            .getMany();
        customTransactions.map((transaction) => __awaiter(this, void 0, void 0, function* () {
            //if more than 30days since purchase date, change status to 270
            const currentDate = new Date();
            const purchaseDate = transaction.purchase_date;
            const diffTime = Math.abs(currentDate.getTime() - purchaseDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            console.log('diffDays', diffDays);
            if (diffDays > 30) {
                console.log('changing status of transaction ', transaction.id);
                transaction.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 270 });
                yield transaction.save();
            }
        }));
    });
}, null);
exports.checkCustomTransactionStatusCronJob = checkCustomTransactionStatusCronJob;
