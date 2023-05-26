"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const bookSchema = new Schema({
    name: { type: String, require: true, default: null },
    description: { type: String, default: null },
    authorId: { type: Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});
const BookModel = mongoose_1.default.model("Book", bookSchema);
exports.default = BookModel;
