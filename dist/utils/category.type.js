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
exports.filterCategories = exports.CategoryList = void 0;
const Category_entity_1 = require("@entity/Category.entity");
const type_graphql_1 = require("type-graphql");
let CategoryList = class CategoryList {
    count;
    categories;
};
exports.CategoryList = CategoryList;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CategoryList.prototype, "count", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Category_entity_1.Category]),
    __metadata("design:type", Array)
], CategoryList.prototype, "categories", void 0);
exports.CategoryList = CategoryList = __decorate([
    (0, type_graphql_1.ObjectType)()
], CategoryList);
let filterCategories = class filterCategories {
    search;
};
exports.filterCategories = filterCategories;
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], filterCategories.prototype, "search", void 0);
exports.filterCategories = filterCategories = __decorate([
    (0, type_graphql_1.InputType)()
], filterCategories);
