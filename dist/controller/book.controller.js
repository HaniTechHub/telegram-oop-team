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
const enum_1 = require("../constants/enum");
const book_service_1 = __importDefault(require("../services/book.service"));
const appError_1 = __importDefault(require("../util/appError"));
const service = new book_service_1.default();
class BookController {
    constructor() {
        this.getAllBooks = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const bookList = yield service.getAll();
                return res.status(200).json({
                    status: enum_1.HTTP_CODE._200,
                    data: bookList,
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
        this.getMyBooks = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const bookList = yield service.getMy({
                    authorId: res.locals.userId,
                });
                return res.status(200).json({
                    status: enum_1.HTTP_CODE._200,
                    data: bookList,
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
        this.getBookById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield service.getById(req.params.uid);
                return res.status(200).json({
                    status: enum_1.HTTP_CODE._200,
                    data: book,
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
        this.createBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            if (!name) {
                return res.status(400).json(new appError_1.default("Name is required", 400));
            }
            try {
                const createData = Object.assign(Object.assign({}, req.body), { authorId: res.locals.userId });
                const newBook = yield service.create(createData);
                return res.status(200).json({
                    status: enum_1.HTTP_CODE._200,
                    message: "Create Book Successfully",
                    data: newBook,
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
        this.updateBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            if (!name) {
                res.status(400).json(new appError_1.default("Name is required", 400));
            }
            try {
                const updateCondition = {
                    _id: req.params.uid,
                    authorId: res.locals.userId,
                };
                const updateBook = yield service.update(updateCondition, req.body);
                if (!updateBook) {
                    return res.status(400).json(new appError_1.default("Your Book Not Found", 400));
                }
                return res.status(200).json({
                    status: enum_1.HTTP_CODE._200,
                    message: "Update Book Successfully",
                    data: Object.assign(Object.assign({}, updateBook === null || updateBook === void 0 ? void 0 : updateBook.toObject()), req.body),
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
        this.deleteBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteCondition = {
                    _id: req.params.uid,
                    authorId: res.locals.userId,
                };
                const deleteBook = yield service.delete(deleteCondition);
                if (!deleteBook) {
                    return res.status(400).json(new appError_1.default("Your Book Not Found", 400));
                }
                return res.status(200).json({
                    status: enum_1.HTTP_CODE._200,
                    message: "Delete Book Successfully",
                });
            }
            catch (error) {
                res.status(500).json(new appError_1.default("Internal Server", 500));
            }
        });
    }
}
exports.default = BookController;
