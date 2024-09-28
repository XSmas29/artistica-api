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
const express_1 = require("express");
const env = __importStar(require("env-var"));
const crypto_1 = __importDefault(require("crypto"));
const TransactionHeader_entity_1 = require("@entity/TransactionHeader.entity");
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
const CourseTransaction_entity_1 = require("@entity/CourseTransaction.entity");
const CustomTransaction_entity_1 = require("@entity/CustomTransaction.entity");
const router = (0, express_1.Router)();
router.use((req, res, next) => {
    const { order_id, status_code, gross_amount } = req.body;
    const serverkey = env.get('MIDTRANS_SERVER_KEY').required().asString();
    const hash = crypto_1.default.createHash('sha512');
    hash.update(`${order_id}${status_code}${gross_amount}${serverkey}`);
    const hashed = hash.digest('hex');
    if (hashed === req.body.signature_key)
        next();
    else
        res.status(401).send('Unauthorized');
});
router.get('/test', (req, res) => {
    console.log(req);
    res.send('Hello World!');
});
router.post('/success', (req, res) => {
    console.log(req);
    res.send('Hello World!');
});
router.post('/status', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    if (payload.status_code === '200' &&
        payload.fraud_status === 'accept' &&
        (payload.transaction_status === 'settlement' || payload.transaction_status === 'capture')) {
        const order_category = payload.order_id.split('-')[0];
        if (order_category === 'ORDER') {
            const order = yield TransactionHeader_entity_1.TransactionHeader.findOneBy({ id: payload.order_id });
            if (order) {
                order.payment_method = payload.payment_type;
                order.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 120 });
                order.purchase_date = new Date();
                order.save();
            }
        }
        else if (order_category === 'COURSE') {
            const order = yield CourseTransaction_entity_1.CourseTransaction.findOneBy({ id: payload.order_id });
            if (order) {
                order.payment_method = payload.payment_type;
                order.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 320 });
                order.purchase_date = new Date();
                order.save();
            }
        }
        else if (order_category === 'CUSTOM') {
            const order = yield CustomTransaction_entity_1.CustomTransaction.createQueryBuilder('ct')
                .leftJoinAndSelect('ct.chat', 'cht')
                .leftJoinAndSelect('cht.messages', 'msg')
                .where('ct.id = :id', { id: payload.order_id })
                .andWhere('msg.is_quotation_active = true')
                .getOne();
            if (order) {
                order.chat.messages.map((msg) => __awaiter(void 0, void 0, void 0, function* () {
                    msg.is_quotation_active = false;
                    yield msg.save();
                }));
                order.payment_method = payload.payment_type;
                order.status = yield TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 220 });
                order.purchase_date = new Date();
                order.save();
            }
        }
    }
    res.status(200).send('OK');
}));
exports.default = router;
