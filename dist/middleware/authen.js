"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.validateLogin = exports.validateRegister = void 0;
const appError_1 = __importDefault(require("../util/appError"));
const validateRegister = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json(new appError_1.default("Missing Username Or Password", 400));
    }
    return next();
};
exports.validateRegister = validateRegister;
const validateLogin = validateRegister;
exports.validateLogin = validateLogin;
const validateToken = (req, res, next) => {
    console.log(req);
};
exports.validateToken = validateToken;
