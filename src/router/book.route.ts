import express from "express";
import BookController from "../controller/book.controller";
import { validateToken } from "../middleware/authen.middleware";
const router = express.Router();
const controller = new BookController();

router.get("/get-all", validateToken, controller.getAllBooks);

router.get("/", validateToken, controller.getMyBooks);

router.get("/:uid", validateToken, controller.getBookById);

router.post("/", validateToken, controller.createBook);

router.put("/:uid", validateToken, controller.updateBook);

router.delete("/:uid", validateToken, controller.deleteBook);

export default router;
