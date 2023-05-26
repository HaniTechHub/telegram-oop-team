"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    username: { type: String, require: true, default: null, unique: true },
    password: { type: String, require: true, default: null },
    email: { type: String, default: null },
    phoneNumber: { type: String, default: null },
    isActive: { type: Boolean, default: true },
});
const UserModel = mongoose_1.default.model("User", userSchema);
exports.default = UserModel;
