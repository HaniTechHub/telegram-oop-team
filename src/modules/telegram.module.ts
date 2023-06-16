import { Context, Telegraf } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

export class TelegramCommand {
  telegram: Telegraf<Context>;
  constructor(telegram: Telegraf<Context>) {
    this.telegram = telegram;
  }
  private cmd_list = [
    {
      key: "hi",
      reply: "Welcome To OOP Team",
    },
    {
        key: "hello",
        reply: "Xin Chao",
      },
  ];
  public commandFunc = (key: string, text: string) => {
    this.telegram.command(key, (ctx) => {
      ctx.reply(text);
    });
  };
  public startTelegramCommand = () => {
    this.cmd_list.forEach((cmd) => {
      this.commandFunc(cmd.key, cmd.reply);
    });
  };
}
