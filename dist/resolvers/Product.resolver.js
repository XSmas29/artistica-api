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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const Product_entity_1 = require("@entity/Product.entity");
const params_1 = require("@utils/params");
const type_graphql_1 = require("type-graphql");
const env = __importStar(require("env-var"));
const Image_entity_1 = require("@entity/Image.entity");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const typeorm_1 = require("typeorm");
const lodash_1 = require("lodash");
const product_type_1 = require("@utils/product.type");
const Variant_entity_1 = require("@entity/Variant.entity");
const types_1 = require("@utils/types");
const format_1 = require("@utils/format");
const Attribute_entity_1 = require("@entity/Attribute.entity");
const AttributeOption_entity_1 = require("@entity/AttributeOption.entity");
const VariantValue_entity_1 = require("@entity/VariantValue.entity");
const composables_1 = require("@utils/composables");
const errors_1 = require("@utils/errors");
const files_1 = require("@utils/files");
const path_1 = require("path");
let ProductResolver = class ProductResolver {
    images(root) {
        return (dataloader) => dataloader.load(root.id);
    }
    async products(filter, sort, pagination) {
        const productsQuery = Product_entity_1.Product.createQueryBuilder('prod');
        const variant = Variant_entity_1.Variant.createQueryBuilder('var');
        const min_price = await variant.clone().orderBy('var.price', 'ASC').getOneOrFail();
        const max_price = await variant.clone().orderBy('var.price', 'DESC').getOneOrFail();
        filter.price_min && productsQuery.andWhere(qb => {
            const subQuery = qb.subQuery()
                .select('count(*)')
                .from(Variant_entity_1.Variant, 'var')
                .where('var.price >= :price_min', { price_min: filter.price_min })
                .andWhere('var.product = prod.id')
                .getQuery();
            return subQuery + ' > 0';
        });
        filter.price_max && productsQuery.andWhere(qb => {
            const subQuery = qb.subQuery()
                .select('count(*)')
                .from(Variant_entity_1.Variant, 'var')
                .where('var.price <= :price_max', { price_max: filter.price_max })
                .andWhere('var.product = prod.id')
                .getQuery();
            return subQuery + ' > 0';
        });
        filter.category_ids && filter.category_ids.length > 0 && productsQuery.andWhere('prod.category IN (:c_ids)', { c_ids: filter.category_ids });
        filter.material_ids && filter.material_ids.length > 0 && productsQuery.andWhere('prod.material IN (:m_ids)', { m_ids: filter.material_ids });
        filter.search && productsQuery.andWhere('prod.name LIKE :search', { search: `%${filter.search}%` });
        if (sort.field === 'price') {
            productsQuery.addSelect(subQuery => {
                return subQuery
                    .select('MIN(var.price)')
                    .from(Variant_entity_1.Variant, 'var')
                    .where('var.product = prod.id');
            }, 'min_price');
            productsQuery.addSelect(subQuery => {
                return subQuery
                    .select('MAX(var.price)')
                    .from(Variant_entity_1.Variant, 'var')
                    .where('var.product = prod.id');
            }, 'max_price');
            productsQuery.orderBy(`${sort.sort === 'ASC' ? 'min_price' : 'max_price'}`, sort.sort);
        }
        else {
            productsQuery.orderBy(`prod.${sort.field}`, sort.sort);
        }
        productsQuery.limit(pagination.limit);
        productsQuery.offset((pagination.page - 1) * pagination.limit);
        const products = await productsQuery.getManyAndCount();
        return {
            count: products[1],
            products: products[0],
            price_min: min_price.price,
            price_max: max_price.price,
        };
    }
    async productDetail(id) {
        const product = await Product_entity_1.Product.createQueryBuilder('prod')
            .where('prod.id = :id', { id })
            .getOneOrFail();
        return product;
    }
    async addProduct(data) {
        const { product, attributes, variants } = data;
        const isSKUUnique = await (0, composables_1.checkUniqueSKU)(variants.map(variant => variant.sku));
        if (!isSKUUnique) {
            throw new errors_1.DuplicateEntryError('SKU tidak boleh sama / sudah digunakan sebelumnya');
        }
        const newProduct = Product_entity_1.Product.create({
            name: product.name,
            description: product.description,
            slug: (0, format_1.createSlug)(product.name),
            category: { id: product.category_id },
            material: { id: product.material_id },
            single_variant: attributes.length === 0,
        });
        const productData = await Product_entity_1.Product.save(newProduct);
        product.images.forEach(async (image) => {
            const data = await image;
            const { ext } = (0, path_1.parse)(data.filename);
            const path = `img_${productData.id}_${Date.now().toString()}${ext}`;
            await (0, files_1.uploadFile)(image, `products/${productData.id}`, path);
            const newImage = Image_entity_1.Image.create({
                path: path,
                product: productData,
            });
            await Image_entity_1.Image.save(newImage);
        });
        const newAttributes = attributes.map(async (attr) => {
            const attribute = Attribute_entity_1.Attribute.create({
                name: attr.name,
                product: productData,
            });
            const attributeData = await Attribute_entity_1.Attribute.save(attribute);
            const options = attr.values.map(value => {
                return AttributeOption_entity_1.AttributeOption.create({
                    name: value,
                    attribute: attributeData
                });
            });
            const optionsData = await AttributeOption_entity_1.AttributeOption.save(options);
            return { ...attributeData, options: optionsData };
        });
        const attributeData = await Promise.all(newAttributes);
        // console.log(attributeData.map(attr => attr.options))
        const newVariants = variants.map(async (variant) => {
            const newVariant = Variant_entity_1.Variant.create({
                price: variant.price,
                stock: variant.stock,
                sku: variant.sku,
                product: productData,
            });
            const variantData = await Variant_entity_1.Variant.save(newVariant);
            //upload variant image
            if (variant.image) {
                const data = await variant.image;
                const { ext } = (0, path_1.parse)(data.filename);
                const path = `img_${variantData.id}_${Date.now().toString()}${ext}`;
                await (0, files_1.uploadFile)(variant.image, `variants/${variantData.id}`, path);
                const newImage = Image_entity_1.Image.create({
                    path: path,
                    variant: variantData,
                });
                const imageData = await Image_entity_1.Image.save(newImage);
                variantData.image = imageData;
                await Variant_entity_1.Variant.save(variantData);
            }
            return variantData;
        });
        const result = [];
        (0, format_1.fillVariantValues)(attributeData, 0, [], result);
        const variantData = await Promise.all(newVariants);
        // console.log(variantData)
        console.log(attributeData);
        console.log(attributeData.length);
        const newValues = variantData.map(async (variant, index) => {
            // for (const [i, attr] of attributeData.entries()) {
            for (let i = 0; i < attributeData.length; i++) {
                console.log('index attr: ', i);
                console.log('index vars: ', index);
                console.log(attributeData[i].id);
                // console.log({
                //   variant: await Variant.findOneByOrFail({ id: variant.id }),
                //   attribute: await Attribute.findOneByOrFail({ id: attr.id }),
                //   option: await AttributeOption.findOneByOrFail({ id: result[index][i] }),
                // })
                const variantValue = VariantValue_entity_1.VariantValue.create({
                    variant: await Variant_entity_1.Variant.findOneByOrFail({ id: variant.id }),
                    attribute: await Attribute_entity_1.Attribute.findOneByOrFail({ id: attributeData[i].id }),
                    option: await AttributeOption_entity_1.AttributeOption.findOneByOrFail({ id: result[index][i] }),
                });
                // console.log(variantValue)
                const data = await VariantValue_entity_1.VariantValue.save(variantValue);
                console.log('vv id: ', data.id);
                // return data
            }
        });
        await Promise.all(newValues);
        // console.log(valueData)
        console.log(result);
        return {
            message: 'Produk berhasil ditambahkan',
            success: true,
            // data: product
        };
    }
    async deleteProduct(id) {
        //delete product
        const product = await Product_entity_1.Product.findOneByOrFail({ id });
        await Product_entity_1.Product.softRemove(product);
        //soft delete product attributes
        const attributes = await Attribute_entity_1.Attribute.createQueryBuilder('attr')
            .where('attr.product = :id', { id })
            .getMany();
        await Attribute_entity_1.Attribute.softRemove(attributes);
        //delete product images
        const images = await Image_entity_1.Image.createQueryBuilder('img')
            .where('img.product = :id', { id })
            .getMany();
        images.forEach(image => {
            (0, files_1.deleteFile)(`products/${product.id}/${image.path}`);
        });
        await Image_entity_1.Image.remove(images);
        //soft delete product attribute options
        if (attributes.length > 0) {
            const options = await AttributeOption_entity_1.AttributeOption.createQueryBuilder('opt')
                .where('opt.attribute IN (:...ids)', { ids: attributes.map(attr => attr.id) })
                .getMany();
            await AttributeOption_entity_1.AttributeOption.softRemove(options);
        }
        //soft delete product variants
        const variants = await Variant_entity_1.Variant.createQueryBuilder('var')
            .where('var.product = :id', { id })
            .getMany();
        if (variants.length > 0) {
            const values = await VariantValue_entity_1.VariantValue.createQueryBuilder('val')
                .where('val.variant IN (:...ids)', { ids: variants.map(variant => variant.id) })
                .getMany();
            await VariantValue_entity_1.VariantValue.softRemove(values);
            //delete variant images
            const variant_images = await Image_entity_1.Image.createQueryBuilder('img')
                .leftJoinAndSelect('img.variant', 'variant')
                .where('img.variant IN (:...ids)', { ids: variants.map(variant => variant.id) })
                .getMany();
            console.log(variant_images);
            variant_images.forEach(image => {
                (0, files_1.deleteFile)(`variants/${image.variant.id}/${image.path}`);
            });
            await Image_entity_1.Image.remove(variant_images);
        }
        await Variant_entity_1.Variant.softRemove(variants);
        return {
            message: 'Produk berhasil dihapus',
            success: true,
        };
    }
    async updateProduct(id, data) {
        const { product, attributes, variants } = data;
        const isSKUUnique = await (0, composables_1.checkUniqueSKU)(variants.map(variant => variant.sku));
        if (!isSKUUnique) {
            throw new errors_1.DuplicateEntryError('SKU tidak boleh sama / sudah digunakan sebelumnya');
        }
        const oldProduct = await Product_entity_1.Product.findOneByOrFail({ id });
        await Product_entity_1.Product.update(oldProduct.id, {
            name: product.name,
            description: product.description,
            slug: (0, format_1.createSlug)(product.name),
            category: { id: product.category_id },
            material: { id: product.material_id },
            single_variant: attributes.length === 0,
        });
        const productData = await Product_entity_1.Product.findOneByOrFail({ id });
        //delete old data
        //soft delete product attributes
        const oldAttributes = await Attribute_entity_1.Attribute.createQueryBuilder('attr')
            .where('attr.product = :id', { id })
            .getMany();
        await Attribute_entity_1.Attribute.softRemove(oldAttributes);
        //delete product images
        const oldProductImages = await Image_entity_1.Image.createQueryBuilder('img')
            .where('img.product = :id', { id })
            .getMany();
        oldProductImages.forEach(image => {
            (0, files_1.deleteFile)(`products/${productData.id}/${image.path}`);
        });
        await Image_entity_1.Image.remove(oldProductImages);
        //soft delete product attribute options
        if (oldAttributes.length > 0) {
            const oldOptions = await AttributeOption_entity_1.AttributeOption.createQueryBuilder('opt')
                .where('opt.attribute IN (:...ids)', { ids: oldAttributes.map(attr => attr.id) })
                .getMany();
            await AttributeOption_entity_1.AttributeOption.softRemove(oldOptions);
        }
        //soft delete product variants
        const oldVariants = await Variant_entity_1.Variant.createQueryBuilder('var')
            .where('var.product = :id', { id })
            .getMany();
        if (oldVariants.length > 0) {
            const oldValues = await VariantValue_entity_1.VariantValue.createQueryBuilder('val')
                .where('val.variant IN (:...ids)', { ids: oldVariants.map(variant => variant.id) })
                .getMany();
            await VariantValue_entity_1.VariantValue.softRemove(oldValues);
            //delete variant images
            const old_variant_images = await Image_entity_1.Image.createQueryBuilder('img')
                .leftJoinAndSelect('img.variant', 'variant')
                .where('img.variant IN (:...ids)', { ids: oldVariants.map(variant => variant.id) })
                .getMany();
            console.log(old_variant_images);
            old_variant_images.forEach(image => {
                (0, files_1.deleteFile)(`variants/${image.variant.id}/${image.path}`);
            });
            await Image_entity_1.Image.remove(old_variant_images);
        }
        await Variant_entity_1.Variant.softRemove(oldVariants);
        product.images.forEach(async (image) => {
            const data = await image;
            const { ext } = (0, path_1.parse)(data.filename);
            const path = `img_${productData.id}_${Date.now().toString()}${ext}`;
            await (0, files_1.uploadFile)(image, `products/${productData.id}`, path);
            const newImage = Image_entity_1.Image.create({
                path: path,
                product: productData,
            });
            await Image_entity_1.Image.save(newImage);
        });
        const newAttributes = attributes.map(async (attr) => {
            const attribute = Attribute_entity_1.Attribute.create({
                name: attr.name,
                product: productData,
            });
            const attributeData = await Attribute_entity_1.Attribute.save(attribute);
            const options = attr.values.map(value => {
                return AttributeOption_entity_1.AttributeOption.create({
                    name: value,
                    attribute: attributeData
                });
            });
            const optionsData = await AttributeOption_entity_1.AttributeOption.save(options);
            return { ...attributeData, options: optionsData };
        });
        const attributeData = await Promise.all(newAttributes);
        const newVariants = variants.map(async (variant) => {
            const newVariant = Variant_entity_1.Variant.create({
                price: variant.price,
                stock: variant.stock,
                sku: variant.sku,
                product: productData,
            });
            const variantData = await Variant_entity_1.Variant.save(newVariant);
            //upload variant image
            if (variant.image) {
                const data = await variant.image;
                const { ext } = (0, path_1.parse)(data.filename);
                const path = `img_${variantData.id}_${Date.now().toString()}${ext}`;
                await (0, files_1.uploadFile)(variant.image, `variants/${variantData.id}`, path);
                const newImage = Image_entity_1.Image.create({
                    path: path,
                    variant: variantData,
                });
                const imageData = await Image_entity_1.Image.save(newImage);
                variantData.image = imageData;
                await Variant_entity_1.Variant.save(variantData);
            }
            return variantData;
        });
        const result = [];
        (0, format_1.fillVariantValues)(attributeData, 0, [], result);
        const variantData = await Promise.all(newVariants);
        // console.log(variantData)
        console.log(attributeData);
        console.log(attributeData.length);
        const newValues = variantData.map(async (variant, index) => {
            // for (const [i, attr] of attributeData.entries()) {
            for (let i = 0; i < attributeData.length; i++) {
                console.log('index attr: ', i);
                console.log('index vars: ', index);
                console.log(attributeData[i].id);
                // console.log({
                //   variant: await Variant.findOneByOrFail({ id: variant.id }),
                //   attribute: await Attribute.findOneByOrFail({ id: attr.id }),
                //   option: await AttributeOption.findOneByOrFail({ id: result[index][i] }),
                // })
                const variantValue = VariantValue_entity_1.VariantValue.create({
                    variant: await Variant_entity_1.Variant.findOneByOrFail({ id: variant.id }),
                    attribute: await Attribute_entity_1.Attribute.findOneByOrFail({ id: attributeData[i].id }),
                    option: await AttributeOption_entity_1.AttributeOption.findOneByOrFail({ id: result[index][i] }),
                });
                // console.log(variantValue)
                const data = await VariantValue_entity_1.VariantValue.save(variantValue);
                console.log('vv id: ', data.id);
                // return data
            }
        });
        await Promise.all(newValues);
        // console.log(valueData)
        console.log(result);
        return {
            message: 'Produk berhasil diperbarui',
            success: true,
            // data: product
        };
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    (0, type_graphql_dataloader_1.Loader)(async (ids) => {
        const images = await Image_entity_1.Image.find({
            where: { product: { id: (0, typeorm_1.In)([...ids]) } },
            relations: ['product'],
        });
        const base_url = env.get('BASE_URL').required().asString();
        images.forEach(image => image.path = `${base_url}/products/${image.product.id.toString()}/${image.path}`);
        const imagesById = (0, lodash_1.groupBy)(images, 'product.id');
        return ids.map(id => imagesById[id] ?? []);
    }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Product_entity_1.Product]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "images", null);
__decorate([
    (0, type_graphql_1.Query)(() => product_type_1.ProductList),
    __param(0, (0, type_graphql_1.Arg)('filter')),
    __param(1, (0, type_graphql_1.Arg)('sort')),
    __param(2, (0, type_graphql_1.Arg)('pagination')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_type_1.filterProducts,
        params_1.sort,
        params_1.pagination]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "products", null);
__decorate([
    (0, type_graphql_1.Query)(() => Product_entity_1.Product),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "productDetail", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [params_1.ProductData]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "addProduct", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "deleteProduct", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, params_1.ProductData]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "updateProduct", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, type_graphql_1.Resolver)(Product_entity_1.Product)
], ProductResolver);
