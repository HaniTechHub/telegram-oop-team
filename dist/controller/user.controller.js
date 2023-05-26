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
const user_service_1 = __importDefault(require("../services/user.service"));
const appError_1 = __importDefault(require("../util/appError"));
const service = new user_service_1.default();
class UserController {
    constructor() {
        this.get_list_user = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const listUser = yield service.find_all();
                return res.status(200).json({
                    status: res.statusCode,
                    data: listUser,
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
        this.get_user_by_id = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield service.find_by_id(req.params.uid);
                return res.status(200).json({
                    status: res.statusCode,
                    data: user,
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
    }
}
exports.default = UserController;
