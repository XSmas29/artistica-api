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
const env = __importStar(require("env-var"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
class RajaOngkir {
    constructor(key, tier) {
        this.api_key = key;
        this.tier = tier;
    }
    getProvinces() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(`https://api.rajaongkir.com/${this.tier}/province`, {
                headers: {
                    'key': this.api_key
                }
            })
                .then(response => {
                resolve(response.data.rajaongkir.results);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    getCities(provinceId) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(`https://api.rajaongkir.com/${this.tier}/city?province=${provinceId}`, {
                headers: {
                    'key': this.api_key
                }
            })
                .then(response => {
                resolve(response.data.rajaongkir.results);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    getCost(origin, destination, weight, courier) {
        console.log(origin, destination, weight, courier);
        return new Promise((resolve, reject) => {
            axios_1.default.post(`https://api.rajaongkir.com/${this.tier}/cost`, {
                origin,
                destination,
                weight,
                courier
            }, {
                headers: {
                    'key': this.api_key,
                    'content-type': 'application/x-www-form-urlencoded'
                },
            })
                .then(response => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const results = response.data.rajaongkir.results[0].costs.map((cost) => {
                    return {
                        service: cost.service,
                        description: cost.description,
                        cost: cost.cost[0].value,
                        etd: cost.cost[0].etd,
                        note: cost.cost[0].note
                    };
                });
                resolve(results);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
}
const RJInstance = new RajaOngkir(env.get('RAJAONGKIR_API_KEY').required().asString(), env.get('RAJAONGKIR_TIER').required().asString());
exports.default = RJInstance;
