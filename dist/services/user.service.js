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
exports.user_service = void 0;
const user_model_1 = __importDefault(require("../model/user.model"));
class UserService {
    constructor() {
        this.find_all = () => __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.find();
        });
        this.find_by_username = (username) => __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.findOne({ username });
        });
        this.find_by_id = (userId) => __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.findById(userId);
        });
        this.create_user = (data) => __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.default.create(data);
        });
    }
}
exports.default = UserService;
exports.user_service = new UserService();
