
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Polling {
    long = "long",
    short = "short",
    "default" = "default"
}

export abstract class IQuery {
    abstract stocks(): Stock[] | Promise<Stock[]>;

    abstract tickers(symbol: string, limit?: number): Ticker[] | Promise<Ticker[]>;

    abstract tickerUnsubscribe(symbol: string): boolean | Promise<boolean>;
}

export abstract class IMutation {
    abstract addStock(symbol: string): Stock | Promise<Stock>;

    abstract deleteStock(id: string): boolean | Promise<boolean>;
}

export class Stock {
    id: string;
    exchange: string;
    symbol: string;
    polling: Polling;
    isActive: boolean;
    last: number;
    open: number;
    close: number;
}

export abstract class ISubscription {
    abstract tickerSubscribe(symbol: string): Ticker | Promise<Ticker>;
}

export class Ticker {
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
