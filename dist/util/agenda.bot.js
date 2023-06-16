"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectAgenda = void 0;
const agenda_1 = require("@hokify/agenda");
const connectAgenda = () => {
    return new agenda_1.Agenda({
        db: {
            address: "mongodb+srv://tamvo0610:Conmemay123@cluster0.c1mq3ob.mongodb.net/?retryWrites=true&w=majority",
            collection: "Agenda",
        }
    });
    // return new Promise<Agenda>((resolve, reject) => {
    //   const agenda = new Agenda({
    //     db: {
    //       address:
    //         "mongodb+srv://tamvo0610:Conmemay123@cluster0.c1mq3ob.mongodb.net/?retryWrites=true&w=majority",
    //       collection: "Agenda",
    //     },
    //     processEvery: "1 minutes",
    //   });
    //   agenda
    //     .start()
    //     .then(() => {
    //       console.log("Connect Agenda Success");
    //       resolve(agenda);
    //     })
    //     .catch((err) => {
    //       console.log("Connect Agenda Error: ", err);
    //       reject(err);
    //     });
    // });
};
exports.connectAgenda = connectAgenda;
