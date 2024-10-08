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
exports.filterUsers = exports.UserList = void 0;
const User_entity_1 = require("@entity/User.entity");
const type_graphql_1 = require("type-graphql");
let filterUsers = class filterUsers {
};
exports.filterUsers = filterUsers;
__decorate([
    (0, type_graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", Object)
], filterUsers.prototype, "search", void 0);
exports.filterUsers = filterUsers = __decorate([
    (0, type_graphql_1.InputType)()
], filterUsers);
let UserList = class UserList {
};
exports.UserList = UserList;
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UserList.prototype, "count", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_entity_1.User]),
    __metadata("design:type", Array)
], UserList.prototype, "users", void 0);
exports.UserList = UserList = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserList);
