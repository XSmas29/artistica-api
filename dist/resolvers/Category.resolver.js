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
exports.CategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Category_entity_1 = require("@entity/Category.entity");
const category_type_1 = require("@utils/category.type");
const params_1 = require("@utils/params");
const types_1 = require("@utils/types");
const errors_1 = require("@utils/errors");
let CategoryResolver = class CategoryResolver {
    async categories(filter, pagination) {
        const categoriesQuery = Category_entity_1.Category.createQueryBuilder('cat');
        if (filter?.search) {
            categoriesQuery.where('cat.name LIKE :search', { search: `%${filter.search}%` });
        }
        if (pagination) {
            categoriesQuery.limit(pagination.limit);
            categoriesQuery.offset((pagination.page - 1) * pagination.limit);
        }
        const categories = await categoriesQuery.getManyAndCount();
        return {
            count: categories[1],
            categories: categories[0],
        };
    }
    async addCategory(data) {
        const category = await Category_entity_1.Category.findOneBy({ name: data.name });
        if (category) {
            throw new errors_1.DuplicateEntryError('Kategori sudah ada');
        }
        if (!data.name) {
            throw new Error('Nama kategori tidak boleh kosong');
        }
        await Category_entity_1.Category.insert({
            name: data.name,
        });
        return {
            success: true,
            message: 'Berhasil menambahkan kategori',
        };
    }
    async updateCategory(id, data) {
        const category = await Category_entity_1.Category.findOneBy({ id: id });
        if (!category) {
            throw new errors_1.NotFoundError('Kategori tidak ditemukan');
        }
        if (!data.name) {
            throw new Error('Nama kategori tidak boleh kosong');
        }
        const sameName = await Category_entity_1.Category.createQueryBuilder('cat')
            .where('cat.name = :name', { name: data.name })
            .andWhere('cat.id != :id', { id: id })
            .getOne();
        if (sameName) {
            throw new errors_1.DuplicateEntryError('Kategori sudah ada');
        }
        await Category_entity_1.Category.update(category.id, {
            name: data.name,
        });
        return {
            success: true,
            message: 'Berhasil mengubah kategori',
        };
    }
    async deleteCategory(id) {
        const category = await Category_entity_1.Category.createQueryBuilder('cat')
            .where('cat.id = :id', { id: id })
            .leftJoinAndSelect('cat.products', 'products')
            .getOne();
        if (!category) {
            throw new errors_1.NotFoundError('Kategori tidak ditemukan');
        }
        if (category.products.length > 0) {
            throw new Error('Kategori tidak dapat dihapus karena masih memiliki produk');
        }
        await Category_entity_1.Category.delete(category.id);
        return {
            success: true,
            message: 'Berhasil menghapus kategori',
        };
    }
};
exports.CategoryResolver = CategoryResolver;
__decorate([
    (0, type_graphql_1.Query)(() => category_type_1.CategoryList),
    __param(0, (0, type_graphql_1.Arg)('filter', { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('pagination', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_type_1.filterCategories,
        params_1.pagination]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "categories", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [params_1.CategoryData]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "addCategory", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, params_1.CategoryData]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
exports.CategoryResolver = CategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)(Category_entity_1.Category)
], CategoryResolver);
