import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: { type: String, require: true, default: null },
    description: { type: String, default: null },
    authorId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const BookModel = mongoose.model("Book", bookSchema);
export default BookModel;
