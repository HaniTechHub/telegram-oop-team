"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
});
exports.UserSchema = mongoose.model('User', userSchema);
