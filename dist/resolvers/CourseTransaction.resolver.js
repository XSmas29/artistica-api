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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseTransactionResolver = void 0;
const Course_entity_1 = require("@entity/Course.entity");
const CourseTransaction_entity_1 = require("@entity/CourseTransaction.entity");
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
const params_1 = require("@utils/params");
const transaction_type_1 = require("@utils/transaction.type");
const types_1 = require("@utils/types");
const type_graphql_1 = require("type-graphql");
let CourseTransactionResolver = class CourseTransactionResolver {
    addCourseTransaction(transaction_data_1, item_data_1, _a) {
        return __awaiter(this, arguments, void 0, function* (transaction_data, item_data, { auth: { userData } }) {
            yield CourseTransaction_entity_1.CourseTransaction.create({
                id: transaction_data.transaction_id,
                user: userData,
                course: yield Course_entity_1.Course.findOneByOrFail({ id: item_data.course_id }),
                price: item_data.price,
                amount: item_data.quantity,
                total_price: item_data.price * item_data.quantity,
                status: yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 310 }),
                start_date: transaction_data.start_date,
                time_slot: transaction_data.time_slot,
            }).save();
            return {
                success: true,
                message: 'Berhasil menyimpan transaksi',
            };
        });
    }
    removeCourseTransaction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield CourseTransaction_entity_1.CourseTransaction.delete({ id });
            return {
                success: true,
                message: 'Berhasil menghapus transaksi',
            };
        });
    }
    courseTransactions(sort_1, pagination_1, _a) {
        return __awaiter(this, arguments, void 0, function* (sort, pagination, { auth: { userData } }) {
            const courseTransactions = CourseTransaction_entity_1.CourseTransaction.createQueryBuilder('crt');
            if (!userData.is_admin) {
                courseTransactions.where('crt.user = :user', { user: userData.id });
            }
            courseTransactions.andWhere('crt.status = :status', { status: 320 });
            courseTransactions.orderBy(`${sort.field}`, sort.sort)
                .limit(pagination.limit)
                .offset((pagination.page - 1) * pagination.limit)
                .getManyAndCount();
            const courseTransactionData = yield courseTransactions.getManyAndCount();
            return {
                count: courseTransactionData[1],
                course_transactions: courseTransactionData[0],
            };
        });
    }
    courseTransactionDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return CourseTransaction_entity_1.CourseTransaction.findOneByOrFail({ id: id });
        });
    }
};
exports.CourseTransactionResolver = CourseTransactionResolver;
__decorate([
    (0, type_graphql_1.Authorized)(['USER']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('transaction_data')),
    __param(1, (0, type_graphql_1.Arg)('item_data', () => transaction_type_1.CourseTransactionItemData)),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_type_1.CourseTransactionData,
        transaction_type_1.CourseTransactionItemData, Object]),
    __metadata("design:returntype", Promise)
], CourseTransactionResolver.prototype, "addCourseTransaction", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseTransactionResolver.prototype, "removeCourseTransaction", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => transaction_type_1.CourseTransactionList),
    __param(0, (0, type_graphql_1.Arg)('sort')),
    __param(1, (0, type_graphql_1.Arg)('pagination')),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [params_1.sort,
        params_1.pagination, Object]),
    __metadata("design:returntype", Promise)
], CourseTransactionResolver.prototype, "courseTransactions", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => CourseTransaction_entity_1.CourseTransaction),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseTransactionResolver.prototype, "courseTransactionDetail", null);
exports.CourseTransactionResolver = CourseTransactionResolver = __decorate([
    (0, type_graphql_1.Resolver)(CourseTransaction_entity_1.CourseTransaction)
], CourseTransactionResolver);
