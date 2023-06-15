import { Agenda, IJobDefinition, Job } from "@hokify/agenda";

export const connectAgenda = async () => {
  try {
    const agenda = new Agenda({
      db: {
        address:
          "mongodb+srv://tamvo0610:Conmemay123@cluster0.c1mq3ob.mongodb.net/?retryWrites=true&w=majority",
        collection: "Agenda",
      },
      processEvery: "1 minutes",
    });
    return agenda
  } catch (error) {
    console.log(error);
  }
};
