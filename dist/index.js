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
const telegram_module_1 = require("./modules/telegram.module");
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
app.listen(port, () => {
    console.log(`Ditconmemay app is running on http://localhost:${port}`);
    (0, util_1.connectTelegramBot)((bot) => {
        const _teleCommand = new telegram_module_1.TelegramCommand(bot);
        _teleCommand.startTelegramCommand();
    }, (agenda, bot) => __awaiter(void 0, void 0, void 0, function* () {
        const _morning = new modules_1.AgendaService(agenda, bot, {
            type: 'schedule',
            key: "send morning",
            text: "Test Ne",
            time: "today at 02:47AM"
        });
        _morning.define();
        (() => __awaiter(void 0, void 0, void 0, function* () {
            yield agenda.start();
            yield _morning.start();
        }))();
    }));
});
