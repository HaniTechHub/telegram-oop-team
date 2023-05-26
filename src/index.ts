import express, { Request, Response } from "express";
import authenRouter from "./router/authen.route";
import bookRouter from './router/book.route'
import { connectMongoose } from "./util/connectDb";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/api/authen", authenRouter);

app.use("/api/book", bookRouter);

app.get('/ping', (req, res) => {
  res.send('pong 🏓')
})


app.get("*", (req, res) => {
  res.send("404");
});

connectMongoose()
  .then(() => {
    console.log("Mongoose Connect Success");
    app.listen(port, () => {
      console.log(`Ditconmemay app is running on http://localhost:${port}`);
    });
  })
  .catch((err: any) => {
    console.log("Mongoose Connect Error", err);
    process.exit(1);
  });
