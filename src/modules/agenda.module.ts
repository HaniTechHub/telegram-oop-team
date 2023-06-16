import { Agenda } from "@hokify/agenda";
import { JobPriority } from "@hokify/agenda/dist/utils/priority";
import { Context, Telegraf } from "telegraf";
import { TelegramCommand } from "./telegram.module";

interface Options {
  type: "schedule" | "every";
  key: string;
  time: string;
  text: string;
  priority?: JobPriority;
}

export class AgendaService {
  agenda: Agenda;
  bot: Telegraf<Context>;
  data: Options;
  constructor(agenda: Agenda, telegram: Telegraf<Context>, data: Options) {
    this.agenda = agenda;
    this.bot = telegram;
    this.data = data;
  }

  public define = () => {
    this.agenda?.define(
      this.data.key,
      (job, done) => {
        this.bot.telegram.sendMessage("1964347822", this.data.text);
        job.repeatEvery("24 hours", {
          skipImmediate: true,
        });
        job.save();
        done();
      },
      {
        priority: this.data.priority ?? "high",
        concurrency: 10,
      }
    );
  };
  public start = async () => {
    if (this.data.type === "schedule") {
      await this.agenda?.schedule(this.data.time, this.data.key, {
        userCount: 100,
      });
    } else if (this.data.type === "every") {
      await this.agenda?.every(this.data.time, this.data.key, {
        userCount: 100,
      });
    }
  };
}
