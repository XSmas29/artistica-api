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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintResolver = void 0;
const Complaint_entity_1 = require("@entity/Complaint.entity");
const type_graphql_1 = require("type-graphql");
const env = __importStar(require("env-var"));
const types_1 = require("@utils/types");
const complaint_type_1 = require("@utils/complaint.type");
const path_1 = require("path");
const files_1 = require("@utils/files");
const CustomTransaction_entity_1 = require("@entity/CustomTransaction.entity");
const ComplaintType_entity_1 = require("@entity/ComplaintType.entity");
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
const params_1 = require("@utils/params");
const typeorm_1 = require("typeorm");
let ComplaintResolver = class ComplaintResolver {
    image(complaint) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Complaint_entity_1.Complaint.createQueryBuilder('cmt')
                .where('cmt.id = :complaintId', { complaintId: complaint.id })
                .getOneOrFail();
            const base_url = env.get('BASE_URL').required().asString();
            return complaint.image ? `${base_url}/complaint/${data.id.toString()}/${complaint.image}` : null;
        });
    }
    addComplaint(complaint_data) {
        return __awaiter(this, void 0, void 0, function* () {
            // let path = ''
            // const imageData = await complaint_data.image
            // if (imageData) {
            //   const { ext } = parse(imageData.filename)
            //   path = `img_${complaint_data.custom_transaction_id}_${Date.now().toString()}${ext}`
            //   await uploadFile(imageData, `complaint/${complaint_data.}`, path)
            // }
            const complaintData = yield Complaint_entity_1.Complaint.create({
                custom_transaction: yield CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: complaint_data.custom_transaction_id }),
                type: yield ComplaintType_entity_1.ComplaintType.findOneByOrFail({ id: complaint_data.type_id }),
                description: complaint_data.description,
            }).save();
            //change custom transaction status
            const customTransaction = yield CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: complaint_data.custom_transaction_id });
            if (complaint_data.type_id === 1) {
                customTransaction.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 251 });
            }
            else if (complaint_data.type_id === 2) {
                customTransaction.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 252 });
            }
            yield customTransaction.save();
            if (complaint_data.image) {
                const imageData = yield complaint_data.image;
                const { ext } = (0, path_1.parse)(imageData.filename);
                const path = `img_${complaint_data.custom_transaction_id}_${Date.now().toString()}${ext}`;
                yield (0, files_1.uploadFile)(imageData, `complaint/${complaintData.id}`, path);
                complaintData.image = path;
            }
            return {
                success: true,
                message: 'Berhasil mengajukan keluhan',
            };
        });
    }
    complaintTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield ComplaintType_entity_1.ComplaintType.find();
            return res;
        });
    }
    complaints(custom_transaction_id, filter, sort, pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(filter);
            const complaint = Complaint_entity_1.Complaint.createQueryBuilder('cmt');
            custom_transaction_id && complaint.andWhere('cmt.custom_transaction = :custom_transaction_id', { custom_transaction_id });
            (filter === null || filter === void 0 ? void 0 : filter.is_approved_values) && filter.is_approved_values.length > 0 && complaint.andWhere(new typeorm_1.Brackets((qb) => {
                var _a;
                qb.orWhere('cmt.is_approved in (:is_approved)', { is_approved: filter.is_approved_values });
                ((_a = filter === null || filter === void 0 ? void 0 : filter.is_approved_values) === null || _a === void 0 ? void 0 : _a.includes(null)) && qb.orWhere('cmt.is_approved is NULL');
            }));
            (filter === null || filter === void 0 ? void 0 : filter.type_ids) && filter.type_ids.length > 0 && complaint.andWhere('cmt.type in (:type)', { type: filter.type_ids });
            console.log(complaint.getQueryAndParameters());
            sort && complaint.orderBy(`${sort.field}`, sort.sort);
            pagination && complaint.limit(pagination.limit)
                .offset((pagination.page - 1) * pagination.limit);
            const res = yield complaint.getManyAndCount();
            return {
                count: res[1],
                complaints: res[0],
            };
        });
    }
    complaintDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const complaint = yield Complaint_entity_1.Complaint.findOneByOrFail({ id });
            return complaint;
        });
    }
    updateComplaintApproval(id, is_approved) {
        return __awaiter(this, void 0, void 0, function* () {
            const complaint = yield Complaint_entity_1.Complaint.createQueryBuilder('cmt')
                .where('cmt.id = :id', { id })
                .leftJoinAndSelect('cmt.custom_transaction', 'custom_transaction')
                .leftJoinAndSelect('cmt.type', 'type')
                .getOneOrFail();
            complaint.is_approved = is_approved;
            yield complaint.save();
            //update status custom transaction
            const customTransaction = yield CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: complaint.custom_transaction.id });
            console.log(customTransaction);
            if (is_approved === false)
                customTransaction.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 240 });
            else if (is_approved === true) {
                if (complaint.type.id === 1)
                    customTransaction.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 261 });
                else if (complaint.type.id === 2)
                    customTransaction.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 262 });
            }
            yield customTransaction.save();
            return {
                success: true,
                message: 'Berhasil mengubah status komplain',
            };
        });
    }
};
exports.ComplaintResolver = ComplaintResolver;
__decorate([
    (0, type_graphql_1.FieldResolver)(() => String),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Complaint_entity_1.Complaint]),
    __metadata("design:returntype", Promise)
], ComplaintResolver.prototype, "image", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [complaint_type_1.ComplaintData]),
    __metadata("design:returntype", Promise)
], ComplaintResolver.prototype, "addComplaint", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => [ComplaintType_entity_1.ComplaintType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComplaintResolver.prototype, "complaintTypes", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => complaint_type_1.ComplaintList),
    __param(0, (0, type_graphql_1.Arg)('custom_transaction_id', { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('filter', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('sort', { nullable: true })),
    __param(3, (0, type_graphql_1.Arg)('pagination', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, complaint_type_1.filterComplaints,
        params_1.sort,
        params_1.pagination]),
    __metadata("design:returntype", Promise)
], ComplaintResolver.prototype, "complaints", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => Complaint_entity_1.Complaint),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComplaintResolver.prototype, "complaintDetail", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('is_approved')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], ComplaintResolver.prototype, "updateComplaintApproval", null);
exports.ComplaintResolver = ComplaintResolver = __decorate([
    (0, type_graphql_1.Resolver)(Complaint_entity_1.Complaint)
], ComplaintResolver);
