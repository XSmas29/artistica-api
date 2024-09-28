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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintList = exports.filterComplaints = exports.ComplaintData = void 0;
const Complaint_entity_1 = require("@entity/Complaint.entity");
const graphql_upload_ts_1 = require("graphql-upload-ts");
const type_graphql_1 = require("type-graphql");
let ComplaintData = class ComplaintData {
};
exports.ComplaintData = ComplaintData;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ComplaintData.prototype, "custom_transaction_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ComplaintData.prototype, "type_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ComplaintData.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => graphql_upload_ts_1.GraphQLUpload, { nullable: true }),
    __metadata("design:type", Object)
], ComplaintData.prototype, "image", void 0);
exports.ComplaintData = ComplaintData = __decorate([
    (0, type_graphql_1.InputType)()
], ComplaintData);
let filterComplaints = class filterComplaints {
};
exports.filterComplaints = filterComplaints;
__decorate([
    (0, type_graphql_1.Field)(() => [Boolean], { nullable: 'itemsAndList' }),
    __metadata("design:type", Array)
], filterComplaints.prototype, "is_approved_values", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Number], { nullable: true }),
    __metadata("design:type", Array)
], filterComplaints.prototype, "type_ids", void 0);
exports.filterComplaints = filterComplaints = __decorate([
    (0, type_graphql_1.InputType)()
], filterComplaints);
let ComplaintList = class ComplaintList {
};
exports.ComplaintList = ComplaintList;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ComplaintList.prototype, "count", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Complaint_entity_1.Complaint]),
    __metadata("design:type", Array)
], ComplaintList.prototype, "complaints", void 0);
exports.ComplaintList = ComplaintList = __decorate([
    (0, type_graphql_1.ObjectType)()
], ComplaintList);
