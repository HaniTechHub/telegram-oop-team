"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("../controller/book.controller"));
const authen_middleware_1 = require("../middleware/authen.middleware");
const router = express_1.default.Router();
const controller = new book_controller_1.default();
router.get("/get-all", authen_middleware_1.validateToken, controller.getAllBooks);
router.get("/", authen_middleware_1.validateToken, controller.getMyBooks);
router.get("/:uid", authen_middleware_1.validateToken, controller.getBookById);
router.post("/", authen_middleware_1.validateToken, controller.createBook);
router.put("/:uid", authen_middleware_1.validateToken, controller.updateBook);
router.delete("/:uid", authen_middleware_1.validateToken, controller.deleteBook);
exports.default = router;
