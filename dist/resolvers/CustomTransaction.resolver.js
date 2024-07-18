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
exports.CustomTransactionResolver = void 0;
const CustomTransaction_entity_1 = require("@entity/CustomTransaction.entity");
const params_1 = require("@utils/params");
const types_1 = require("@utils/types");
const type_graphql_1 = require("type-graphql");
const path_1 = require("path");
const files_1 = require("@utils/files");
const Image_entity_1 = require("@entity/Image.entity");
const Chat_entity_1 = require("@entity/Chat.entity");
const env = __importStar(require("env-var"));
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const typeorm_1 = require("typeorm");
const lodash_1 = require("lodash");
let CustomTransactionResolver = class CustomTransactionResolver {
    images(root) {
        return (dataloader) => dataloader.load(root.id);
    }
    async addCustomTransaction(data, { auth: { userData } }) {
        const { images, ...rest } = data;
        const newCustomTransaction = CustomTransaction_entity_1.CustomTransaction.create({
            user: userData,
            ...rest,
        });
        const customTransactionData = await CustomTransaction_entity_1.CustomTransaction.save(newCustomTransaction);
        const newChat = Chat_entity_1.Chat.create({
            custom_transaction: customTransactionData,
            title: `${rest.product_name}`,
        });
        const chatData = await Chat_entity_1.Chat.save(newChat);
        customTransactionData.chat = chatData;
        customTransactionData.save();
        images.forEach(async (image) => {
            const data = await image;
            const { ext } = (0, path_1.parse)(data.filename);
            const path = `img_${customTransactionData.id}_${Date.now().toString()}${ext}`;
            await (0, files_1.uploadFile)(image, `custom_transaction/${customTransactionData.id}`, path);
            const newImage = Image_entity_1.Image.create({
                path: path,
                custom_transaction: customTransactionData,
            });
            await Image_entity_1.Image.save(newImage);
        });
        return {
            success: true,
            message: 'Berhasil menambahkan Request Perhiasan kustom',
        };
    }
    async updateCustomTransactionBasicInfo(id, data) {
        const customTransaction = await CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: id });
        await CustomTransaction_entity_1.CustomTransaction.update(customTransaction.id, {
            ...data,
        });
        return {
            success: true,
            message: 'Berhasil mengubah data Request Perhiasan kustom',
        };
    }
    async customTransactionDetail(id) {
        return CustomTransaction_entity_1.CustomTransaction.findOneByOrFail({ id: id });
    }
};
exports.CustomTransactionResolver = CustomTransactionResolver;
__decorate([
    (0, type_graphql_1.FieldResolver)(),
    (0, type_graphql_dataloader_1.Loader)(async (ids) => {
        const images = await Image_entity_1.Image.find({
            where: { custom_transaction: { id: (0, typeorm_1.In)([...ids]) } },
            relations: ['custom_transaction'],
        });
        const base_url = env.get('BASE_URL').required().asString();
        images.forEach(image => image.path = `${base_url}/custom_transaction/${image.custom_transaction.id.toString()}/${image.path}`);
        const imagesById = (0, lodash_1.groupBy)(images, 'custom_transaction.id');
        return ids.map(id => imagesById[id] ?? []);
    }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomTransaction_entity_1.CustomTransaction]),
    __metadata("design:returntype", void 0)
], CustomTransactionResolver.prototype, "images", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [params_1.AddCustomTransactionData, Object]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "addCustomTransaction", null);
__decorate([
    (0, type_graphql_1.Authorized)(['ADMIN']),
    (0, type_graphql_1.Mutation)(() => types_1.ServerResponse),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __param(1, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, params_1.UpdateCustomTransactionData]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "updateCustomTransactionBasicInfo", null);
__decorate([
    (0, type_graphql_1.Authorized)(['USER', 'ADMIN']),
    (0, type_graphql_1.Query)(() => CustomTransaction_entity_1.CustomTransaction),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomTransactionResolver.prototype, "customTransactionDetail", null);
exports.CustomTransactionResolver = CustomTransactionResolver = __decorate([
    (0, type_graphql_1.Resolver)(CustomTransaction_entity_1.CustomTransaction)
], CustomTransactionResolver);
