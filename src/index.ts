import express from "express";
import { connectTelegramBot } from "./util";
import dotenv from "dotenv";
import { AgendaService } from "./modules";
import { TelegramCommand } from "./modules/telegram.module";
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

app.listen(port, () => {
  console.log(`Ditconmemay app is running on http://localhost:${port}`);
  connectTelegramBot(
    (bot) => {
      const _teleCommand = new TelegramCommand(bot);
      _teleCommand.startTelegramCommand();
    },
    async (agenda, bot) => {
      const _morning = new AgendaService(agenda, bot, {
        type: "schedule",
        key: "send morning",
        text: "Test Ne",
        time: "today at 02:47AM",
      });
      _morning.define();
      (async () => {
        await agenda.start();
        await _morning.start();
      })();
    }
  );
});
