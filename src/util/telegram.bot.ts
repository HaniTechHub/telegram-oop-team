import { Agenda } from "@hokify/agenda";
import { Telegraf, Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import { TelegramCommand } from "../modules/telegram.module";

const botToken = "6216875975:AAHxA-71bimbADWjb3j3TRtmvqRXL3rTsCk";
const chatId = "-1001927204735";

interface MyContext extends Telegraf<Context<Update>> {}

export const connectTelegramBot = async (
  telegram?: (bot: MyContext) => void,
  agenda?: (agenda: Agenda, bot: Telegraf<Context>) => void
) => {
  const telegramService = new Telegraf<Context>(botToken);
  const agendaService = new Agenda({
    db: {
      address:
        "mongodb+srv://tamvo0610:Conmemay123@cluster0.c1mq3ob.mongodb.net/?retryWrites=true&w=majority",
      collection: "Agenda",
    },
  });
  telegramService.use(async (_, next) => {
    const start = new Date();
    await next();
    console.log("Response time: ", start);
  });
  telegram?.(telegramService);
  agenda?.(agendaService, telegramService);
  await telegramService.launch();
};
