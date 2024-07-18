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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const env = __importStar(require("env-var"));
const crypto_1 = __importDefault(require("crypto"));
const TransactionHeader_entity_1 = require("@entity/TransactionHeader.entity");
const TransactionStatus_entity_1 = require("@entity/TransactionStatus.entity");
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
router.post('/status', async (req, res) => {
    const payload = req.body;
    if (payload.status_code === '200' &&
        payload.fraud_status === 'accept' &&
        (payload.transaction_status === 'settlement' || payload.transaction_status === 'capture')) {
        const order = await TransactionHeader_entity_1.TransactionHeader.findOneBy({ id: payload.order_id });
        if (order) {
            order.payment_method = payload.payment_type;
            order.status = await TransactionStatus_entity_1.TransactionStatus.findOneByOrFail({ id: 2 });
            order.save();
        }
    }
    res.status(200).send('OK');
});
exports.default = router;
