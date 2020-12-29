import { Polling } from '@st/enums';

export interface AppStatus {
  message: string;
}

export interface KeyValue {
  [key: string]: string | KeyValue | number;
}

export interface StockWishlist {
  id: string;
  exchange: string;
  symbol: string;
  polling: Polling;
  isActive: boolean;
  last: number;
  open: number;
  close: number;
}

export interface Ticker {
  open: number;
  high: number;
  low: number;
  last: number;
  close: number;
  volume: number;
  date: string;
  symbol: string;
  exchange: string;
}
