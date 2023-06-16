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
const agenda_1 = require("@hokify/agenda");
const telegraf_1 = require("telegraf");
const botToken = "6216875975:AAHxA-71bimbADWjb3j3TRtmvqRXL3rTsCk";
const chatId = "-1001927204735";
const connectTelegramBot = (telegram, agenda) => __awaiter(void 0, void 0, void 0, function* () {
    const telegramService = new telegraf_1.Telegraf(botToken);
    const agendaService = new agenda_1.Agenda({
        db: {
            address: "mongodb+srv://tamvo0610:Conmemay123@cluster0.c1mq3ob.mongodb.net/?retryWrites=true&w=majority",
            collection: "Agenda",
        },
    });
    telegramService.use((_, next) => __awaiter(void 0, void 0, void 0, function* () {
        const start = new Date();
        yield next();
        console.log("Response time: ", start);
    }));
    telegram === null || telegram === void 0 ? void 0 : telegram(telegramService);
    agenda === null || agenda === void 0 ? void 0 : agenda(agendaService, telegramService);
    yield telegramService.launch();
});
exports.connectTelegramBot = connectTelegramBot;
