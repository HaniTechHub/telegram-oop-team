"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signJwt = (payload, options = {}) => {
    var _a;
    return jsonwebtoken_1.default.sign(payload, (_a = process.env.ACCESS_TOKEN_SECRET) !== null && _a !== void 0 ? _a : "", options);
};
exports.signJwt = signJwt;
const verifyJwt = (token) => {
    var _a;
    try {
        const publicKey = Buffer.from((_a = process.env.ACCESS_TOKEN_SECRET) !== null && _a !== void 0 ? _a : "", "base64").toString("ascii");
        return jsonwebtoken_1.default.verify(token, publicKey);
    }
    catch (error) {
        return null;
    }
};
exports.verifyJwt = verifyJwt;
