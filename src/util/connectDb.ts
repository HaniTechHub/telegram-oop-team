const mongoose = require("mongoose");

require("dotenv").config();
const db = "mongodb+srv://tamvo0610:Conmemay123@cluster0.c1mq3ob.mongodb.net/?retryWrites=true&w=majority";

export const connectMongoose = () => {
  return mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
