"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectTelegramBot = void 0;
const telegraf_1 = require("telegraf");
const filters_1 = require("telegraf/filters");
const botToken = "6216875975:AAGYtmRseIP66bTZRr_k34YTHErKHdcMewY";
const chatId = "-1001927204735";
const connectTelegramBot = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const telegramBot = new telegraf_1.Telegraf(botToken);
        const test = telegramBot.command("hi", (ctx) => {
            ctx.reply("Welcome To OOP Team");
        });
        telegramBot.on((0, filters_1.message)("text"), (ctx) => {
            const message = ctx.update.message.text;
            if (message.match(/hello/)) {
                ctx.reply("Xin Chào");
            }
        });
        yield telegramBot.launch();
        return Object.assign(Object.assign({}, telegramBot), { chat_Id: "1964347822" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.connectTelegramBot = connectTelegramBot;
