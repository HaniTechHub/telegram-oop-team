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
exports.AgendaService = void 0;
class AgendaService {
    constructor(agenda, telegram, data) {
        this.define = () => {
            var _a, _b;
            (_a = this.agenda) === null || _a === void 0 ? void 0 : _a.define(this.data.key, (job, done) => {
                this.bot.telegram.sendMessage("1964347822", this.data.text);
                job.repeatEvery("24 hours", {
                    skipImmediate: true,
                });
                job.save();
                done();
            }, {
                priority: (_b = this.data.priority) !== null && _b !== void 0 ? _b : "high",
                concurrency: 10,
            });
        };
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (this.data.type === "schedule") {
                yield ((_a = this.agenda) === null || _a === void 0 ? void 0 : _a.schedule(this.data.time, this.data.key, {
                    userCount: 100,
                }));
            }
            else if (this.data.type === "every") {
                yield ((_b = this.agenda) === null || _b === void 0 ? void 0 : _b.every(this.data.time, this.data.key, {
                    userCount: 100,
                }));
            }
        });
        this.agenda = agenda;
        this.bot = telegram;
        this.data = data;
    }
}
exports.AgendaService = AgendaService;
