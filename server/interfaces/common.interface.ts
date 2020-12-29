export interface AppStatus {
  message: string;
}

export interface KeyValue {
  [key: string]: string | KeyValue | number;
}
