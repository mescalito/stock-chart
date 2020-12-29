export class StockDto {
  id: string;

  exchange: string;

  symbol: string;

  polling: number;

  isActive: boolean;

  last: number;

  open: number;

  close: number;

  date: Date;
}
