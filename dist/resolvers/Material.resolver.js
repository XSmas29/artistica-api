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
exports.MaterialResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Material_entity_1 = require("@entity/Material.entity");
const params_1 = require("@utils/params");
const types_1 = require("@utils/types");
const errors_1 = require("@utils/errors");
const material_type_1 = require("@utils/material.type");
let MaterialResolver = class MaterialResolver {
    async materials(filter, pagination) {
        const materialsQuery = Material_entity_1.Material.createQueryBuilder('mat');
        if (filter?.search) {
            materialsQuery.where('mat.name LIKE :search', { search: `%${filter.search}%` });
        }
        if (pagination) {
            materialsQuery.limit(pagination.limit);
            materialsQuery.offset((pagination.page - 1) * pagination.limit);
        }
        const materials = await materialsQuery.getManyAndCount();
        return {
            count: materials[1],
            materials: materials[0],
        };
    }
    async addMaterial(data) {
        const material = await Material_entity_1.Material.findOneBy({ name: data.name });
        if (material) {
            throw new errors_1.DuplicateEntryError('Material sudah ada');
        }
        if (!data.name) {
            throw new Error('Nama material tidak boleh kosong');
        }
        await Material_entity_1.Material.insert({
            name: data.name,
        });
        return {
            success: true,
            message: 'Berhasil menambahkan material',
        };
    }
    async updateMaterial(id, data) {
        const material = await Material_entity_1.Material.findOneBy({ id: id });
        if (!material) {
            throw new errors_1.NotFoundError('Material tidak ditemukan');
        }
        if (!data.name) {
            throw new Error('Nama kategori tidak boleh kosong');
        }
        const sameName = await Material_entity_1.Material.createQueryBuilder('mat')
            .where('mat.name = :name', { name: data.name })
            .andWhere('mat.id != :id', { id: id })
            .getOne();
        if (sameName) {
            throw new errors_1.DuplicateEntryError('Material sudah ada');
        }
        await Material_entity_1.Material.update(material.id, {
            name: data.name,
        });
        return {
            success: true,
            message: 'Berhasil mengubah material',
        };
    }
    async deleteMaterial(id) {
        const material = await Material_entity_1.Material.createQueryBuilder('cat')
            .where('cat.id = :id', { id: id })
            .leftJoinAndSelect('cat.products', 'products')
            .getOne();
        if (!material) {
            throw new errors_1.NotFoundError('Material tidak ditemukan');
        }
        if (material.products.length > 0) {
            throw new Error('Material tidak dapat dihapus karena masih memiliki produk');
        }
        await Material_entity_1.Material.delete(material.id);
        return {
            success: true,
            message: 'Berhasil menghapus material',
        };
    }
};
exports.MaterialResolver = MaterialResolver;
__decorate([
    (0, type_graphql_1.Query)(() => material_type_1.MaterialList),
    __param(0, (0, type_graphql_1.Arg)('filter', { nullable: true })),
    __param(1, (0, type_graphql_1.Arg)('pagination', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [material_type_1.filterMaterials,
        params_1.pagination]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "materials", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [params_1.MaterialData]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "addMaterial", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, params_1.MaterialData]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "updateMaterial", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MaterialResolver.prototype, "deleteMaterial", null);
exports.MaterialResolver = MaterialResolver = __decorate([
    (0, type_graphql_1.Resolver)(Material_entity_1.Material)
], MaterialResolver);
