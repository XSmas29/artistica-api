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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseResolver = void 0;
const Course_entity_1 = require("@entity/Course.entity");
const type_graphql_1 = require("type-graphql");
let CourseResolver = class CourseResolver {
    async courses() {
        return await Course_entity_1.Course.find();
    }
    async courseDetail(id) {
        const course = await Course_entity_1.Course.createQueryBuilder('crs')
            .where('crs.id = :id', { id })
            .getOneOrFail();
        return course;
    }
};
exports.CourseResolver = CourseResolver;
__decorate([
    (0, type_graphql_1.Query)(() => [Course_entity_1.Course]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "courses", null);
__decorate([
    (0, type_graphql_1.Query)(() => Course_entity_1.Course),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseResolver.prototype, "courseDetail", null);
exports.CourseResolver = CourseResolver = __decorate([
    (0, type_graphql_1.Resolver)(Course_entity_1.Course)
], CourseResolver);
