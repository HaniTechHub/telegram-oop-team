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
const argon2_1 = __importDefault(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../constants/config");
const user_service_1 = require("../services/user.service");
const appError_1 = __importDefault(require("../util/appError"));
class AuthenController {
    constructor() {
        this.register_account = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            try {
                const user = yield user_service_1.user_service.find_by_username(username);
                if (user) {
                    return res.json(new appError_1.default("User Already Exist", 400));
                }
                const hanshedPassword = yield argon2_1.default.hash(password);
                const newUser = yield user_service_1.user_service.create_user({
                    username,
                    password: hanshedPassword,
                });
                const accessToken = jsonwebtoken_1.default.sign({ userId: newUser.id }, config_1.appConfig.ACCESS_TOKEN_SECRET);
                return res.json({
                    status: res.statusCode,
                    data: {
                        user: {
                            id: newUser._id,
                            username: newUser.username,
                            email: newUser.email,
                            phoneNumber: newUser.phoneNumber,
                        },
                        accessToken,
                    },
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
        this.login_account = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            try {
                const user = yield user_service_1.user_service.find_by_username(username);
                if (!user) {
                    return res.json(new appError_1.default("Invalid Username or Password", 400));
                }
                const isPasswordValid = yield argon2_1.default.verify(user.password, password);
                if (!isPasswordValid) {
                    return res
                        .status(400)
                        .json(new appError_1.default("Incorrect Username Or Password", 400));
                }
                const accessToken = jsonwebtoken_1.default.sign({ userId: user._id }, config_1.appConfig.ACCESS_TOKEN_SECRET);
                res.status(200).json({
                    status: res.statusCode,
                    data: {
                        user: {
                            id: user._id,
                            username: user.username,
                            email: user.email,
                            phoneNumber: user.phoneNumber,
                        },
                        accessToken,
                    },
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
        this.get_profile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_service_1.user_service.find_by_id(res.locals.userId);
                res.status(200).json({
                    status: res.statusCode,
                    data: {
                        id: user === null || user === void 0 ? void 0 : user._id,
                        username: user === null || user === void 0 ? void 0 : user.username,
                        email: user === null || user === void 0 ? void 0 : user.email,
                        phoneNumber: user === null || user === void 0 ? void 0 : user.phoneNumber,
                    },
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
    }
}
exports.default = AuthenController;
