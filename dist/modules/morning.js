"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MorningAgenda = void 0;
class MorningAgenda {
    constructor(agenda) {
        this.define_key = "send morning";
        this.time_key = "today at 20:30PM";
        this.defined = (callback) => {
            var _a;
            (_a = this.agenda) === null || _a === void 0 ? void 0 : _a.define(this.define_key, callback, {
                priority: "high",
                concurrency: 10,
            });
        };
        this.schedule = () => {
            var _a;
            (_a = this.agenda) === null || _a === void 0 ? void 0 : _a.schedule(this.time_key, this.define_key, {
                userCount: 100,
            });
        };
        this.runAgenda = ({ processor }) => {
            this.defined(processor);
            this.schedule();
        };
        this.agenda = agenda;
    }
}
exports.MorningAgenda = MorningAgenda;
