"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSeeder = void 0;
const typeorm_extension_1 = require("typeorm-extension");
const Variant_seed_1 = __importDefault(require("@seeder/Variant.seed"));
const Product_seed_1 = __importDefault(require("@seeder/Product.seed"));
const Material_seed_1 = __importDefault(require("@seeder/Material.seed"));
const Category_seed_1 = __importDefault(require("@seeder/Category.seed"));
const Image_seed_1 = __importDefault(require("@seeder/Image.seed"));
const DeliveryProvider_seed_1 = __importDefault(require("./DeliveryProvider.seed"));
const User_seed_1 = __importDefault(require("./User.seed"));
const Attribute_seed_1 = __importDefault(require("./Attribute.seed"));
const AttributeOption_seed_1 = __importDefault(require("./AttributeOption.seed"));
const VariantValue_seed_1 = __importDefault(require("./VariantValue.seed"));
const TransactionStatus_seed_1 = __importDefault(require("./TransactionStatus.seed"));
const Course_seed_1 = __importDefault(require("./Course.seed"));
class MainSeeder {
    async run(dataSource) {
        await (0, typeorm_extension_1.runSeeder)(dataSource, Material_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, Category_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, Product_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, Attribute_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, AttributeOption_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, Variant_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, VariantValue_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, Image_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, DeliveryProvider_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, User_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, TransactionStatus_seed_1.default);
        await (0, typeorm_extension_1.runSeeder)(dataSource, Course_seed_1.default);
    }
}
exports.MainSeeder = MainSeeder;
