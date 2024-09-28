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
exports.Complaint = void 0;
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const CustomTransaction_entity_1 = require("./CustomTransaction.entity");
const ComplaintType_entity_1 = require("./ComplaintType.entity");
let Complaint = class Complaint extends typeorm_1.BaseEntity {
};
exports.Complaint = Complaint;
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Complaint.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => CustomTransaction_entity_1.CustomTransaction),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => CustomTransaction_entity_1.CustomTransaction, custom_transaction => custom_transaction.complaints),
    __metadata("design:type", CustomTransaction_entity_1.CustomTransaction)
], Complaint.prototype, "custom_transaction", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ComplaintType_entity_1.ComplaintType),
    (0, type_graphql_dataloader_1.TypeormLoader)(),
    (0, typeorm_1.ManyToOne)(() => ComplaintType_entity_1.ComplaintType, complaint_type => complaint_type.complaints),
    __metadata("design:type", ComplaintType_entity_1.ComplaintType)
], Complaint.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Complaint.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Complaint.prototype, "image", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Complaint.prototype, "is_approved", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date
    // @Field()
    // @Column()
    // user_id!: number
    // @Field()
    // @Column()
    // title!: string
    // @Field()
    // @Column()
    // description!: string
    // @Field()
    // @Column()
    // status!: string
    // @Field()
    // @Column()
    // created_at!: Date
    // @Field()
    // @Column()
    // updated_at!: Date
    )
], Complaint.prototype, "created_at", void 0);
exports.Complaint = Complaint = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'complaints' })
], Complaint);
