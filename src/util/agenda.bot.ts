import { Agenda } from "@hokify/agenda";

export const connectAgenda = () => {
  return new Agenda({
    db: {
      address:
        "mongodb+srv://tamvo0610:Conmemay123@cluster0.c1mq3ob.mongodb.net/?retryWrites=true&w=majority",
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
