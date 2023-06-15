import { Agenda } from "@hokify/agenda";

type Config = {
    processor: () => any
}

type Start = (data: Config) => void;

export class MorningAgenda {
  agenda: Agenda | undefined;
  constructor(agenda?: Agenda) {
    this.agenda = agenda;
  }
  private define_key = "send morning";
  private time_key = "today at 20:30PM";
  private defined = (callback: () => any) => {
    this.agenda?.define(this.define_key, callback, {
      priority: "high",
      concurrency: 10,
    });
  };
  private schedule: () => void = () => {
    this.agenda?.schedule(this.time_key, this.define_key, {
      userCount: 100,
    });
  };
  public runAgenda: Start = ({processor}) => {
    this.defined(processor)
    this.schedule()
  }
}
