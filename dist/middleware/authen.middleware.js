"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.validateLogin = exports.validateRegister = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../constants/config");
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
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json(new appError_1.default("You are not logged in", 401));
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.appConfig.ACCESS_TOKEN_SECRET);
        res.locals.userId = decoded.userId;
        next();
    }
    catch (error) {
        res.status(401).json(new appError_1.default("Invalid Token", 401));
    }
};
exports.validateToken = validateToken;
