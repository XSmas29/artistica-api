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
exports.filterMaterials = exports.MaterialList = void 0;
const Material_entity_1 = require("@entity/Material.entity");
const type_graphql_1 = require("type-graphql");
let MaterialList = class MaterialList {
    count;
    materials;
};
exports.MaterialList = MaterialList;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], MaterialList.prototype, "count", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Material_entity_1.Material]),
    __metadata("design:type", Array)
], MaterialList.prototype, "materials", void 0);
exports.MaterialList = MaterialList = __decorate([
    (0, type_graphql_1.ObjectType)()
], MaterialList);
let filterMaterials = class filterMaterials {
    search;
};
exports.filterMaterials = filterMaterials;
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], filterMaterials.prototype, "search", void 0);
exports.filterMaterials = filterMaterials = __decorate([
    (0, type_graphql_1.InputType)()
], filterMaterials);
