import { BookType } from "../interface/book.interface";
import BookModel from "../model/book.model";

class BookService {
  public getAll = async () => {
    return await BookModel.find();
  };
  public getMy = async (condition: { authorId: string }) => {
    return await BookModel.find(condition);
  };
  public getById = async (bookId: string) => {
    return await BookModel.findById(bookId);
  };
  public create = async (data: BookType) => {
    return await BookModel.create(data);
  };
  public update = async (
    condition: { _id: string; authorId: string },
    data: BookType
  ) => {
    return await BookModel.findOneAndUpdate(condition, data);
  };
  public delete = async (condition: { _id: string; authorId?: string }) => {
    return await BookModel.findOneAndDelete(condition);
  };
}

export default BookService;
