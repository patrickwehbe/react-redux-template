export type ResponseStatus = "success" | "error";

export class Response<T> {
  public status: ResponseStatus = "success";
  public data: T;

  constructor(data: T) {
    this.data = data;
  }
}
