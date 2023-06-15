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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const util_1 = require("./util");
const dotenv_1 = __importDefault(require("dotenv"));
const modules_1 = require("./modules");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    res.send("Hello OOP Team 🏓");
});
app.get("*", (req, res) => {
    res.send("404");
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, util_1.connectMongoose)();
        app.listen(port, () => {
            (0, util_1.connectTelegramBot)().then((telegramBot) => {
                (0, util_1.connectAgenda)().then((agenda) => {
                    if (!telegramBot)
                        return;
                    const _morning = new modules_1.MorningAgenda(agenda);
                    agenda === null || agenda === void 0 ? void 0 : agenda.start();
                    _morning.runAgenda({
                        processor: () => {
                            telegramBot.telegram.sendMessage(telegramBot.chat_Id, "Dwqdqwdw");
                        },
                    });
                });
            });
            console.log(`Ditconmemay app is running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log("Mongoose Connect Error", error);
        process.exit(1);
    }
}))();
