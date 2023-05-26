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
const book_model_1 = __importDefault(require("../model/book.model"));
class BookService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return yield book_model_1.default.find();
        });
        this.getMy = (condition) => __awaiter(this, void 0, void 0, function* () {
            return yield book_model_1.default.find(condition);
        });
        this.getById = (bookId) => __awaiter(this, void 0, void 0, function* () {
            return yield book_model_1.default.findById(bookId);
        });
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            return yield book_model_1.default.create(data);
        });
        this.update = (condition, data) => __awaiter(this, void 0, void 0, function* () {
            return yield book_model_1.default.findOneAndUpdate(condition, data);
        });
        this.delete = (condition) => __awaiter(this, void 0, void 0, function* () {
            return yield book_model_1.default.findOneAndDelete(condition);
        });
    }
}
exports.default = BookService;
