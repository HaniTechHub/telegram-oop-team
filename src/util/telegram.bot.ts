import { Telegraf, Context } from "telegraf";
import { message } from "telegraf/filters";

const botToken = "6216875975:AAGYtmRseIP66bTZRr_k34YTHErKHdcMewY";
const chatId = "-1001927204735";

export const connectTelegramBot = async () => {
  try {
    const telegramBot = new Telegraf(botToken);
    const test = telegramBot.command("hi", (ctx) => {
      ctx.reply("Welcome To OOP Team");
    });
    telegramBot.on(message("text"), (ctx) => {
      const message = ctx.update.message.text;
      if (message.match(/hello/)) {
        ctx.reply("Xin Chào");
      }
    });
    await telegramBot.launch();
    return {
      ...telegramBot,
      chat_Id: "1964347822"
    };
  } catch (error) {
    console.log(error);
  }
};
