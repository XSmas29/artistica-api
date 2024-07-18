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
exports.generateAccessToken = exports.authChecker = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env = __importStar(require("env-var"));
const authChecker = ({ context: { req, res } }, roles) => {
    const token = req.headers.authorization;
    if (!token || token === 'null')
        return false;
    else {
        jsonwebtoken_1.default.verify(token, env.get('JWT_SECRET').required().asString(), (err, decoded) => {
            // if (err) throw err;
            if (err)
                return false;
            else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const role = decoded.userData.is_admin ? 'ADMIN' : 'USER';
                if (roles && roles.length > 0 && !roles.includes(role))
                    return false;
                else
                    return true;
            }
        });
    }
    return true;
};
exports.authChecker = authChecker;
const generateAccessToken = (user) => {
    return jsonwebtoken_1.default.sign({ userData: user }, env.get('JWT_SECRET').required().asString(), {
        expiresIn: '15min',
    });
};
exports.generateAccessToken = generateAccessToken;
