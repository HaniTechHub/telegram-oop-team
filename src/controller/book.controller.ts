import { Request, Response } from "express";
import { HTTP_CODE } from "../constants/enum";
import { BookType } from "../interface/book.interface";
import BookService from "../services/book.service";
import AppError from "../util/appError";

const service = new BookService();

class BookController {
  public getAllBooks = async (req: Request, res: Response) => {
    try {
      const bookList = await service.getAll();
      return res.status(200).json({
        status: HTTP_CODE._200,
        data: bookList,
      });
    } catch (error) {
      res.status(500).json(new AppError("Internal Server", 500));
    }
  };
  public getMyBooks = async (req: Request, res: Response) => {
    try {
      const bookList = await service.getMy({
        authorId: res.locals.userId,
      });
      return res.status(200).json({
        status: HTTP_CODE._200,
        data: bookList,
      });
    } catch (error) {
      res.status(500).json(new AppError("Internal Server", 500));
    }
  };
  public getBookById = async (req: Request, res: Response) => {
    try {
      const book = await service.getById(req.params.uid);
      return res.status(200).json({
        status: HTTP_CODE._200,
        data: book,
      });
    } catch (error) {
      res.status(500).json(new AppError("Internal Server", 500));
    }
  };
  public createBook = async (req: Request, res: Response) => {
    const { name } = req.body as BookType;
    if (!name) {
      return res.status(400).json(new AppError("Name is required", 400));
    }
    try {
      const createData = {
        ...req.body,
        authorId: res.locals.userId,
      };
      const newBook = await service.create(createData);
      return res.status(200).json({
        status: HTTP_CODE._200,
        message: "Create Book Successfully",
        data: newBook,
      });
    } catch (error) {
      res.status(500).json(new AppError("Internal Server", 500));
    }
  };
  public updateBook = async (req: Request, res: Response) => {
    const { name } = req.body as BookType;
    if (!name) {
      res.status(400).json(new AppError("Name is required", 400));
    }
    try {
      const updateCondition = {
        _id: req.params.uid,
        authorId: res.locals.userId,
      };
      const updateBook = await service.update(updateCondition, req.body);
      if (!updateBook) {
        return res.status(400).json(new AppError("Your Book Not Found", 400));
      }
      return res.status(200).json({
        status: HTTP_CODE._200,
        message: "Update Book Successfully",
        data: {
          ...updateBook?.toObject(),
          ...req.body,
        },
      });
    } catch (error) {
      res.status(500).json(new AppError("Internal Server", 500));
    }
  };
  public deleteBook = async (req: Request, res: Response) => {
    try {
      const deleteCondition = {
        _id: req.params.uid,
        authorId: res.locals.userId,
      };
      const deleteBook = await service.delete(deleteCondition);
      if (!deleteBook) {
        return res.status(400).json(new AppError("Your Book Not Found", 400));
      }
      return res.status(200).json({
        status: HTTP_CODE._200,
        message: "Delete Book Successfully",
      });
    } catch (error) {
      res.status(500).json(new AppError("Internal Server", 500));
    }
  };
}

export default BookController;
