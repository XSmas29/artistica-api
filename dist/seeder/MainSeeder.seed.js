"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const ComplaintType_seed_1 = __importDefault(require("./ComplaintType.seed"));
class MainSeeder {
    run(dataSource) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, typeorm_extension_1.runSeeder)(dataSource, Material_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, Category_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, Product_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, Attribute_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, AttributeOption_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, Variant_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, VariantValue_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, Image_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, DeliveryProvider_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, User_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, TransactionStatus_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, Course_seed_1.default);
            yield (0, typeorm_extension_1.runSeeder)(dataSource, ComplaintType_seed_1.default);
        });
    }
}
exports.MainSeeder = MainSeeder;
