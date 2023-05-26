export default class AppError {
  data: null | undefined;

  constructor(public message: string, public status: number = 500) {
    this.data = null;
  }
}
