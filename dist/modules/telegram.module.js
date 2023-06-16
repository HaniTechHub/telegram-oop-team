"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramCommand = void 0;
class TelegramCommand {
    constructor(telegram) {
        this.cmd_list = [
            {
                key: "hi",
                reply: "Welcome To OOP Team",
            },
            {
                key: "hello",
                reply: "Xin Chao",
            },
        ];
        this.commandFunc = (key, text) => {
            this.telegram.command(key, (ctx) => {
                ctx.reply(text);
            });
        };
        this.startTelegramCommand = () => {
            this.cmd_list.forEach((cmd) => {
                this.commandFunc(cmd.key, cmd.reply);
            });
        };
        this.telegram = telegram;
    }
}
exports.TelegramCommand = TelegramCommand;
