"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResolver = void 0;
const TransactionDetail_entity_1 = require("@entity/TransactionDetail.entity");
const TransactionHeader_entity_1 = require("@entity/TransactionHeader.entity");
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
const Variant_entity_1 = require("@entity/Variant.entity");
const midtrans_api_1 = __importDefault(require("@utils/api/midtrans.api"));
const params_1 = require("@utils/params");
const transaction_type_1 = require("@utils/transaction.type");
const types_1 = require("@utils/types");
const type_graphql_1 = require("type-graphql");
let TransactionResolver = class TransactionResolver {
    async addTransactionMT(transaction_detail, item_details, customer_detail, credit_card) {
        const res = await midtrans_api_1.default.createTransaction(transaction_detail, item_details, customer_detail, credit_card);
        return res;
    }
    async addTransaction(transaction_data, item_data, { auth: { userData } }) {
        const header = await TransactionHeader_entity_1.TransactionHeader.create({
            id: transaction_data.transaction_id,
            user: userData,
            total_price: transaction_data.total_price,
            shipping_cost: transaction_data.shipping_cost,
            shipping_service: transaction_data.shipping_service,
            shipping_address: transaction_data.shipping_address,
            shipping_city: transaction_data.shipping_city,
            shipping_postal_code: transaction_data.shipping_postal_code,
            customer_phone: transaction_data.customer_phone,
            customer_name: transaction_data.customer_name,
            customer_email: transaction_data.customer_email,
            status: await TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 1 }),
        }).save();
        item_data.forEach(async (item) => {
            await TransactionDetail_entity_1.TransactionDetail.create({
                header,
                variant: await Variant_entity_1.Variant.findOneByOrFail({ id: item.variant_id }),
                price: item.price,
                quantity: item.quantity,
            }).save();
        });
        return {
            success: true,
            message: 'Berhasil menyimpan transaksi',
        };
    }
    async transactionStatuses() {
        return TransactionStatus_entity_1.TransactionStatus.find();
    }
    async transactions(filter, sort, pagination, { auth: { userData } }) {
        const transactions = TransactionHeader_entity_1.TransactionHeader.createQueryBuilder('header');
        filter.status_ids && filter.status_ids.length > 0 && transactions.where('header.status in (:statuses)', { statuses: filter.status_ids });
        userData.is_admin === false && transactions.andWhere('header.user = :user_id', { user_id: userData.id });
        transactions.orderBy(`header.${sort.field}`, sort.sort)
            .limit(pagination.limit)
            .offset((pagination.page - 1) * pagination.limit)
            .getManyAndCount();
        console.log(transactions.getQueryAndParameters());
        const result = await transactions.getManyAndCount();
        return {
            count: result[1],
            transactions: result[0],
        };
    }
    async transactionDetail(transaction_id) {
        return TransactionHeader_entity_1.TransactionHeader.findOneByOrFail({ id: transaction_id });
    }
    async updateTransactionStatus(transaction_id, status_id) {
        const header = await TransactionHeader_entity_1.TransactionHeader.findOneByOrFail({ id: transaction_id });
        const status = await TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: status_id });
        header.status = status;
        await header.save();
        return {
            success: true,
            message: 'Berhasil mengubah status transaksi',
        };
    }
};
exports.TransactionResolver = TransactionResolver;
__decorate([
    (0, type_graphql_1.Authorized)(['USER']),
    (0, type_graphql_1.Mutation)(() => transaction_type_1.MTCreateTransResp),
    __param(0, (0, type_graphql_1.Arg)('transaction_detail')),
    __param(1, (0, type_graphql_1.Arg)('item_details', () => [transaction_type_1.ItemDetailMT], { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('customer_detail', { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)('credit_card', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_type_1.TransactionDetailMT, Array, transaction_type_1.CustomerDetailMT,
        transaction_type_1.CreditCardMT]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "addTransactionMT", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('transaction_data')),
    __param(1, (0, type_graphql_1.Arg)('item_data', () => [transaction_type_1.TransactionItemData])),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_type_1.TransactionData, Array, Object]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "addTransaction", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Query)(() => [TransactionStatus_entity_1.TransactionStatus]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "transactionStatuses", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN', 'USER']),
    (0, type_graphql_1.Query)(() => transaction_type_1.TransactionList),
    __param(0, (0, type_graphql_1.Arg)('filter')),
    __param(1, (0, type_graphql_1.Arg)('sort')),
    __param(2, (0, type_graphql_1.Arg)('pagination')),
    __param(3, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_type_1.filterTransaction,
        params_1.sort,
        params_1.pagination, Object]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "transactions", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN', 'USER']),
    (0, type_graphql_1.Query)(() => TransactionHeader_entity_1.TransactionHeader),
    __param(0, (0, type_graphql_1.Arg)('transaction_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "transactionDetail", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN', 'USER']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('transaction_id')),
    __param(1, (0, type_graphql_1.Arg)('status_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "updateTransactionStatus", null);
exports.TransactionResolver = TransactionResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], TransactionResolver);
