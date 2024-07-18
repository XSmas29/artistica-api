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
const axios_1 = __importDefault(require("axios"));
const env = __importStar(require("env-var"));
class MidTrans {
    is_production;
    base_url;
    constructor(is_production) {
        this.is_production = is_production;
        this.base_url = this.is_production ? 'https://app.midtrans.com/snap/v1' : 'https://app.sandbox.midtrans.com/snap/v1';
    }
    createTransaction(transaction_details, item_details, customer_details, credit_card) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(`${this.base_url}/transactions`, {
                transaction_details,
                item_details,
                customer_details,
                credit_card,
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${Buffer.from(`${env.get('MIDTRANS_SERVER_KEY').required().asString()}:`).toString('base64')}`,
                }
            })
                .then(response => {
                resolve(response.data);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
}
const MidTransInstance = new MidTrans(env.get('NODE_ENV').required().asString() === 'production');
exports.default = MidTransInstance;
