import express, { Request, Response } from "express";
import { connectMongoose, connectAgenda, connectTelegramBot } from "./util";
import dotenv from "dotenv";
import { MorningAgenda } from "./modules";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello OOP Team 🏓");
});

app.get("*", (req, res) => {
  res.send("404");
});

(async () => {
  try {
    await connectMongoose();
    app.listen(port, () => {
      connectTelegramBot().then((telegramBot) => {
        connectAgenda().then((agenda) => {
          if (!telegramBot) return;
          const _morning = new MorningAgenda(agenda);
          agenda?.start();
          _morning.runAgenda({
            processor: () => {
              telegramBot.telegram.sendMessage(telegramBot.chat_Id, "Dwqdqwdw");
            },
          });
        });
      });
      console.log(`Ditconmemay app is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Mongoose Connect Error", error);
    process.exit(1);
  }
})();
