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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResolver = void 0;
const CourseTransaction_entity_1 = require("@entity/CourseTransaction.entity");
const CustomTransaction_entity_1 = require("@entity/CustomTransaction.entity");
const Image_entity_1 = require("@entity/Image.entity");
const Product_entity_1 = require("@entity/Product.entity");
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
    addTransactionMT(transaction_detail, item_details, customer_detail, credit_card) {
        return __awaiter(this, void 0, void 0, function* () {
            // checkProductStock
            let stockCheck = true;
            item_details === null || item_details === void 0 ? void 0 : item_details.forEach((item) => __awaiter(this, void 0, void 0, function* () {
                if (Number.isInteger(item.id)) {
                    const variant = yield Variant_entity_1.Variant.findOneByOrFail({ id: +item.id });
                    if (variant.stock < item.quantity) {
                        stockCheck = false;
                    }
                }
            }));
            if (!stockCheck) {
                return {
                    success: false,
                };
            }
            else {
                const res = yield midtrans_api_1.default.createTransaction(transaction_detail, item_details, customer_detail, credit_card);
                return Object.assign(Object.assign({}, res), { success: true });
            }
        });
    }
    addTransaction(transaction_data_1, item_data_1, _a) {
        return __awaiter(this, arguments, void 0, function* (transaction_data, item_data, { auth: { userData } }) {
            const header = yield TransactionHeader_entity_1.TransactionHeader.create({
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
                status: yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 110 }),
            }).save();
            item_data.forEach((item) => __awaiter(this, void 0, void 0, function* () {
                yield TransactionDetail_entity_1.TransactionDetail.create({
                    header,
                    variant: yield Variant_entity_1.Variant.findOneByOrFail({ id: item.variant_id }),
                    price: item.price,
                    quantity: item.quantity,
                }).save();
                const variant = yield Variant_entity_1.Variant.findOneByOrFail({ id: item.variant_id });
                variant.stock -= item.quantity;
                yield variant.save();
            }));
            return {
                success: true,
                message: 'Berhasil menyimpan transaksi',
            };
        });
    }
    removeTransaction(transaction_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactionDetails = yield TransactionDetail_entity_1.TransactionDetail.createQueryBuilder('td')
                .leftJoinAndSelect('td.variant', 'variant')
                .where('td.header = :transaction_id', { transaction_id })
                .getMany();
            transactionDetails.map((detail) => __awaiter(this, void 0, void 0, function* () {
                const variant = yield Variant_entity_1.Variant.findOneByOrFail({ id: detail.variant.id });
                variant.stock += detail.quantity;
                yield variant.save();
            }));
            yield TransactionDetail_entity_1.TransactionDetail.remove(transactionDetails);
            yield TransactionHeader_entity_1.TransactionHeader.delete({ id: transaction_id });
            return {
                success: true,
                message: 'Berhasil menghapus transaksi',
            };
        });
    }
    transactionStatuses(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = TransactionStatus_entity_1.TransactionStatus.createQueryBuilder('status')
                .where('status.category = :category', { category })
                .getMany();
            return res;
        });
    }
    transactions(filter_1, sort_1, pagination_1, _a) {
        return __awaiter(this, arguments, void 0, function* (filter, sort, pagination, { auth: { userData } }) {
            const transactions = TransactionHeader_entity_1.TransactionHeader.createQueryBuilder('header')
                .andWhere("header.status != :status", { status: 110 });
            filter.status_ids && filter.status_ids.length > 0 && transactions.andWhere('header.status in (:statuses)', { statuses: filter.status_ids });
            userData.is_admin === false && transactions.andWhere('header.user = :user_id', { user_id: userData.id });
            transactions.orderBy(`header.${sort.field}`, sort.sort)
                .limit(pagination.limit)
                .offset((pagination.page - 1) * pagination.limit)
                .getManyAndCount();
            const result = yield transactions.getManyAndCount();
            return {
                count: result[1],
                transactions: result[0],
            };
        });
    }
    transactionDetail(transaction_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const header = yield TransactionHeader_entity_1.TransactionHeader.createQueryBuilder('header')
                .withDeleted()
                .andWhere('header.id = :transaction_id', { transaction_id })
                .leftJoinAndSelect('header.details', 'details')
                .leftJoinAndSelect('details.variant', 'variant')
                .leftJoinAndSelect('header.status', 'status')
                .leftJoinAndSelect('header.user', 'user')
                .getOneOrFail();
            const mapping = header.details.map((detail) => __awaiter(this, void 0, void 0, function* () {
                console.log(detail);
                detail.variant = yield Variant_entity_1.Variant.createQueryBuilder('variant')
                    .withDeleted()
                    .where('variant.id = :variant_id', { variant_id: detail.variant.id })
                    .getOneOrFail();
                detail.variant.product = yield Product_entity_1.Product.createQueryBuilder('prod')
                    .withDeleted()
                    .leftJoinAndSelect('prod.variants', 'variants')
                    .leftJoinAndSelect('variants.image', 'image')
                    .where('variants.id = :variant_id', { variant_id: detail.variant.id })
                    .getOneOrFail();
                detail.variant.product.images = yield Image_entity_1.Image.createQueryBuilder('img')
                    .withDeleted()
                    .leftJoinAndSelect('img.product', 'product')
                    .where('product.id = :product_id', { product_id: detail.variant.product.id })
                    .getMany();
                detail.variant.image = yield Image_entity_1.Image.createQueryBuilder('img')
                    .withDeleted()
                    .leftJoinAndSelect('img.variant', 'variant')
                    .where('variant.id = :variant_id', { variant_id: detail.variant.id })
                    .getOne();
                return detail;
            }));
            const res = yield Promise.all(mapping);
            header.details = res;
            const ret = header;
            return ret;
        });
    }
    updateTransactionStatus(transaction_id, status_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const header = yield TransactionHeader_entity_1.TransactionHeader.findOneByOrFail({ id: transaction_id });
            const status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: status_id });
            header.status = status;
            yield header.save();
            return {
                success: true,
                message: 'Berhasil mengubah status transaksi',
            };
        });
    }
    sendOrder(transaction_id, resi_number) {
        return __awaiter(this, void 0, void 0, function* () {
            const header = yield TransactionHeader_entity_1.TransactionHeader.findOneByOrFail({ id: transaction_id });
            header.resi_number = resi_number;
            header.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 130 });
            yield header.save();
            return {
                success: true,
                message: 'Berhasil mengirimkan pesanan',
            };
        });
    }
    incomeReport(period_month) {
        return __awaiter(this, void 0, void 0, function* () {
            let current_month = new Date().getMonth() + 1;
            let current_year = new Date().getFullYear();
            const ret = {
                transaction_income: [],
                custom_income: [],
                course_income: [],
                total_income: [],
                time_label: [],
            };
            const formatter = Intl.DateTimeFormat('id-ID', {
                month: 'short',
                year: 'numeric',
            });
            for (period_month; period_month > 0; period_month--) {
                let total_income = 0;
                const transaction_income = yield TransactionHeader_entity_1.TransactionHeader.createQueryBuilder('header')
                    .select('SUM(header.total_price)', 'total')
                    .where('MONTH(header.purchase_date) = :month', { month: current_month })
                    .andWhere('YEAR(header.purchase_date) = :year', { year: current_year })
                    .getRawOne();
                const custom_income = yield CustomTransaction_entity_1.CustomTransaction.createQueryBuilder('cst')
                    .select('SUM(cst.total_price)', 'total')
                    .where('MONTH(cst.purchase_date) = :month', { month: current_month })
                    .andWhere('YEAR(cst.purchase_date) = :year', { year: current_year })
                    .getRawOne();
                const course_income = yield CourseTransaction_entity_1.CourseTransaction.createQueryBuilder('ct')
                    .select('SUM(ct.total_price)', 'total')
                    .where('MONTH(ct.purchase_date) = :month', { month: current_month })
                    .andWhere('YEAR(ct.purchase_date) = :year', { year: current_year })
                    .getRawOne();
                total_income = +transaction_income.total + +custom_income.total + +course_income.total;
                ret.total_income.unshift(total_income);
                ret.transaction_income.unshift(+transaction_income.total);
                ret.custom_income.unshift(+custom_income.total);
                ret.course_income.unshift(+course_income.total);
                const date = new Date(current_year, current_month - 1);
                ret.time_label.unshift(formatter.format(date));
                if (current_month - 1 <= 0) {
                    current_month = 12;
                    current_year -= 1;
                }
                else {
                    current_month -= 1;
                }
            }
            return ret;
        });
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
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('transaction_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "removeTransaction", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Query)(() => [TransactionStatus_entity_1.TransactionStatus]),
    __param(0, (0, type_graphql_1.Arg)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
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
    (0, type_graphql_1.Query)(() => transaction_type_1.TransactionHistoryHeader),
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
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('transaction_id')),
    __param(1, (0, type_graphql_1.Arg)('resi_number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "sendOrder", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Query)(() => transaction_type_1.IncomeReportData),
    __param(0, (0, type_graphql_1.Arg)('period_month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TransactionResolver.prototype, "incomeReport", null);
exports.TransactionResolver = TransactionResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], TransactionResolver);
