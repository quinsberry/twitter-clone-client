export enum ResponseStatus {
  success = "success",
  error = "error",
}

export interface Response<D> {
  status: ResponseStatus;
  data: D;
  errors?: string;
}
