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
exports.connectAgenda = void 0;
const agenda_1 = require("@hokify/agenda");
const connectAgenda = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agenda = new agenda_1.Agenda({
            db: {
                address: "mongodb+srv://tamvo0610:Conmemay123@cluster0.c1mq3ob.mongodb.net/?retryWrites=true&w=majority",
                collection: "Agenda",
            },
            processEvery: "1 minutes",
        });
        return agenda;
    }
    catch (error) {
        console.log(error);
    }
});
exports.connectAgenda = connectAgenda;
