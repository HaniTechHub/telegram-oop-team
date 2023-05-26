"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoose = void 0;
const mongoose = require("mongoose");
require("dotenv").config();
const db = "mongodb+srv://tamvo0610:Conmemay123@cluster0.c1mq3ob.mongodb.net/?retryWrites=true&w=majority";
const connectMongoose = () => {
    return mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
exports.connectMongoose = connectMongoose;
