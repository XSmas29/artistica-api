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
exports.ComplaintType = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Complaint_entity_1 = require("./Complaint.entity");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
let ComplaintType = class ComplaintType extends typeorm_1.BaseEntity {
};
exports.ComplaintType = ComplaintType;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ComplaintType.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Complaint_entity_1.Complaint]),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.OneToMany)(() => Complaint_entity_1.Complaint, complaint => complaint.type),
    __metadata("design:type", Array)
], ComplaintType.prototype, "complaints", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ComplaintType.prototype, "name", void 0);
exports.ComplaintType = ComplaintType = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'complaint_types' })
], ComplaintType);
