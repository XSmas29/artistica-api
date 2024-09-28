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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const type_graphql_1 = require("type-graphql");
const env = __importStar(require("env-var"));
const User_resolver_1 = require("@resolver/User.resolver");
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = require("@utils/auth");
const cors_1 = __importDefault(require("cors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const data_source_1 = require("./data-source");
const Product_resolver_1 = require("./resolvers/Product.resolver");
const type_graphql_dataloader_1 = require("@ejekanshjain/type-graphql-dataloader");
const Material_resolver_1 = require("@resolver/Material.resolver");
const Category_resolver_1 = require("@resolver/Category.resolver");
const Variant_resolver_1 = require("@resolver/Variant.resolver");
const Delivery_resolver_1 = require("@resolver/Delivery.resolver");
const Transaction_resolver_1 = require("@resolver/Transaction.resolver");
const graphql_upload_ts_1 = require("graphql-upload-ts");
const midtrans_webhook_1 = __importDefault(require("@utils/webhook/midtrans.webhook"));
const CustomTransaction_resolver_1 = require("@resolver/CustomTransaction.resolver");
const Chat_resolver_1 = require("@resolver/Chat.resolver");
const socketIO_1 = __importDefault(require("@utils/socketIO"));
const ChatMessage_resolver_1 = require("@resolver/ChatMessage.resolver");
const Course_resolver_1 = require("@resolver/Course.resolver");
const http_1 = require("http");
const CourseTransaction_resolver_1 = require("@resolver/CourseTransaction.resolver");
const Complaint_resolver_1 = require("@resolver/Complaint.resolver");
const cron_1 = require("@utils/cron");
dotenv_1.default.config();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({
        origin: '*', // or use "*" for all origins
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }));
    app.use(express_1.default.static('public'));
    app.use((0, graphql_upload_ts_1.graphqlUploadExpress)());
    cron_1.checkCustomTransactionStatusCronJob.start();
    const port = env.get('PORT').required().asPortNumber();
    yield data_source_1.AppDataSource.initialize();
    const apolloServer = new server_1.ApolloServer({
        schema: yield (0, type_graphql_1.buildSchema)({
            resolvers: [
                User_resolver_1.UserResolver,
                Product_resolver_1.ProductResolver,
                Material_resolver_1.MaterialResolver,
                Category_resolver_1.CategoryResolver,
                Variant_resolver_1.VariantResolver,
                Delivery_resolver_1.DeliveryResolver,
                Transaction_resolver_1.TransactionResolver,
                CustomTransaction_resolver_1.CustomTransactionResolver,
                Chat_resolver_1.ChatResolver,
                ChatMessage_resolver_1.ChatMessageResolver,
                Course_resolver_1.CourseResolver,
                CourseTransaction_resolver_1.CourseTransactionResolver,
                Complaint_resolver_1.ComplaintResolver,
            ],
            validate: true,
            authChecker: auth_1.authChecker,
        }),
        plugins: [
            (0, type_graphql_dataloader_1.ApolloServerLoaderPlugin)({ typeormGetConnection() {
                    return data_source_1.AppDataSource;
                }, }),
            // ApolloServerPluginLandingPageDisabled(),
        ],
        // csrfPrevention: false,
    });
    yield apolloServer.start();
    app.use('/graphql', (0, express4_1.expressMiddleware)(apolloServer, {
        context: (requestContext) => __awaiter(void 0, void 0, void 0, function* () {
            return {
                req: requestContext.req,
                res: requestContext.res,
                auth: jsonwebtoken_1.default.decode(requestContext.req.headers.authorization || '')
            };
        }),
    }));
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    const httpServer = (0, http_1.createServer)(app);
    httpServer.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
    app.use('/midtrans', midtrans_webhook_1.default);
    (0, socketIO_1.default)(httpServer);
});
main().catch(err => {
    console.error(err);
});
