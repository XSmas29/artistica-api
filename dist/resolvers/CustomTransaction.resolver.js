"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTransactionResolver = void 0;
const CustomTransaction_entity_1 = require("@entity/CustomTransaction.entity");
const params_1 = require("@utils/params");
const types_1 = require("@utils/types");
const type_graphql_1 = require("type-graphql");
const path_1 = require("path");
const files_1 = require("@utils/files");
const Image_entity_1 = require("@entity/Image.entity");
const Chat_entity_1 = require("@entity/Chat.entity");
const env = __importStar(require("env-var"));
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const typeorm_1 = require("typeorm");
const lodash_1 = require("lodash");
const transaction_type_1 = require("@utils/transaction.type");
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
const ChatMessage_entity_1 = require("@entity/ChatMessage.entity");
const User_entity_1 = require("@entity/User.entity");
let CustomTransactionResolver = class CustomTransactionResolver {
    images(root) {
        return (dataloader) => dataloader.load(root.id);
    }
    addCustomTransaction(data_1, _a) {
        return __awaiter(this, arguments, void 0, function* (data, { auth: { userData } }) {
            const { images } = data, rest = __rest(data, ["images"]);
            const newCustomTransaction = CustomTransaction_entity_1.CustomTransaction.create(Object.assign({ user: userData, status: yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 210 }) }, rest));
            const customTransactionData = yield CustomTransaction_entity_1.CustomTransaction.save(newCustomTransaction);
            const newChat = Chat_entity_1.Chat.create({
                custom_transaction: customTransactionData,
                title: `${rest.product_name}`,
            });
            const chatData = yield Chat_entity_1.Chat.save(newChat);
            customTransactionData.chat = chatData;
            customTransactionData.save();
            const chatMessage = ChatMessage_entity_1.ChatMessage.create({
                message: 'Mohon Tunggu Respon dari admin untuk melanjutkan transaksi perhiasan kustom anda.',
                user: yield User_entity_1.User.findOneByOrFail({ id: 1 }),
                chat: chatData,
            });
            yield chatMessage.save();
            images.forEach((image) => __awaiter(this, void 0, void 0, function* () {
                const data = yield image;
                const { ext } = (0, path_1.parse)(data.filename);
                const path = `img_${customTransactionData.id}_${Date.now().toString()}${ext}`;
                yield (0, files_1.uploadFile)(image, `custom_transaction/${customTransactionData.id}`, path);
                const newImage = Image_entity_1.Image.create({
                    path: path,
                    custom_transaction: customTransactionData,
                });
                yield Image_entity_1.Image.save(newImage);
            }));
            return {
                success: true,
                message: 'Berhasil menambahkan Request Perhiasan kustom',
            };
        });
    }
    removeCustomTransaction(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const customTransaction = yield CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: id });
            yield CustomTransaction_entity_1.CustomTransaction.delete(customTransaction.id);
            return {
                success: true,
                message: 'Berhasil menghapus Request Perhiasan kustom',
            };
        });
    }
    updateCustomTransactionBasicInfo(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const customTransaction = yield CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: id });
            yield CustomTransaction_entity_1.CustomTransaction.update(customTransaction.id, Object.assign({}, data));
            return {
                success: true,
                message: 'Berhasil mengubah data Request Perhiasan kustom',
            };
        });
    }
    updateCustomTransactionPurchaseInfo(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const customTransaction = yield CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: id });
            yield CustomTransaction_entity_1.CustomTransaction.update(customTransaction.id, Object.assign({}, data));
            return {
                success: true,
                message: 'Berhasil mengubah data Request Perhiasan kustom',
            };
        });
    }
    customTransactionDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: id });
        });
    }
    sendCustomOrder(transaction_id, resi_number) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: transaction_id });
            transaction.resi_number = resi_number;
            transaction.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 230 });
            yield transaction.save();
            return {
                success: true,
                message: 'Berhasil mengirimkan pesanan',
            };
        });
    }
    updateCustomTransactionStatus(transaction_id, status_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: transaction_id });
            let status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: status_id });
            if (status_id === 240) {
                //check if 1 month has passed since the purchase date
                const currentDate = new Date();
                const purchaseDate = transaction.purchase_date;
                const diffTime = Math.abs(currentDate.getTime() - purchaseDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (diffDays > 30)
                    status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 270 });
            }
            transaction.status = status;
            yield transaction.save();
            return {
                success: true,
                message: 'Berhasil mengubah status transaksi',
            };
        });
    }
    customTransactions(filter_1, sort_1, pagination_1, _a) {
        return __awaiter(this, arguments, void 0, function* (filter, sort, pagination, { auth: { userData } }) {
            const transactions = CustomTransaction_entity_1.CustomTransaction.createQueryBuilder('ctrans');
            filter.status_ids && filter.status_ids.length > 0 && transactions.where('ctrans.status in (:statuses)', { statuses: filter.status_ids });
            userData.is_admin === false && transactions.andWhere('ctrans.user = :user_id', { user_id: userData.id });
            transactions.orderBy(`ctrans.${sort.field}`, sort.sort)
                .limit(pagination.limit)
                .offset((pagination.page - 1) * pagination.limit)
                .getManyAndCount();
            const result = yield transactions.getManyAndCount();
            return {
                count: result[1],
                custom_transactions: result[0],
            };
        });
    }
};
exports.CustomTransactionResolver = CustomTransactionResolver;
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    (0, type_graphql_dataloader_1.Loader)((ids) => __awaiter(void 0, void 0, void 0, function* () {
        const images = yield Image_entity_1.Image.find({
            where: { custom_transaction: { id: (0, typeorm_1.In)([...ids]) } },
            relations: ['custom_transaction'],
        });
        const base_url = env.get('BASE_URL').required().asString();
        images.forEach(image => image.path = `${base_url}/custom_transaction/${image.custom_transaction.id.toString()}/${image.path}`);
        const imagesById = (0, lodash_1.groupBy)(images, 'custom_transaction.id');
        return ids.map(id => { var _a; return (_a = imagesById[id]) !== null && _a !== void 0 ? _a : []; });
    })),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomTransaction_entity_1.CustomTransaction]),
    __metadata("design:returntype", void 0)
], CustomTransactionResolver.prototype, "images", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [params_1.AddCustomTransactionData, Object]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "addCustomTransaction", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "removeCustomTransaction", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, params_1.UpdateCustomTransactionBasicInfoData]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "updateCustomTransactionBasicInfo", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, params_1.UpdateCustomTransactionPurchaseData]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "updateCustomTransactionPurchaseInfo", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => CustomTransaction_entity_1.CustomTransaction),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "customTransactionDetail", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('transaction_id')),
    __param(1, (0, type_graphql_1.Arg)('resi_number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "sendCustomOrder", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN', 'USER']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('transaction_id')),
    __param(1, (0, type_graphql_1.Arg)('status_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "updateCustomTransactionStatus", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN', 'USER']),
    (0, type_graphql_1.Query)(() => transaction_type_1.CustomTransactionList),
    __param(0, (0, type_graphql_1.Arg)('filter')),
    __param(1, (0, type_graphql_1.Arg)('sort')),
    __param(2, (0, type_graphql_1.Arg)('pagination')),
    __param(3, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_type_1.filterCustomTransaction,
        params_1.sort,
        params_1.pagination, Object]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "customTransactions", null);
exports.CustomTransactionResolver = CustomTransactionResolver = __decorate([
    (0, type_graphql_1.Resolver)(CustomTransaction_entity_1.CustomTransaction)
], CustomTransactionResolver);
