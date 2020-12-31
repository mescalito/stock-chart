import { Injectable } from '@angular/core';
import { Ticker } from '@st/interfaces';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

const queryticker = gql`
  query tickers($symbol: String!) {
    tickers(symbol: $symbol, limit: 100) {
      open
      high
      low
      last
      close
      volume
      date
      symbol
      exchange
    }
  }
`;

const tickerUnsubscribe = gql`
  query tickerUnsubscribe($symbol: String!) {
    tickerUnsubscribe(symbol: $symbol)
  }
`;

const tickerSubscribe = gql`
  subscription tickerSubscribe($symbol: String!) {
    tickerSubscribe(symbol: $symbol) {
      open
      high
      low
      last
      close
      volume
      date
      symbol
      exchange
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class TickerService {
  constructor(private apollo: Apollo) {}

  getTicker(variables: { symbol: string }) {
    return this.apollo
      .query<{ tickers: Ticker[] }>({ query: queryticker, variables })
      .pipe(map(({ data }) => (data?.tickers?.length ? data.tickers : [])));
  }

  tickerUnsubscribe(variables: { symbol: string }) {
    return this.apollo
      .query<{ tickerUnsubscribe: boolean }>({
        query: tickerUnsubscribe,
        variables,
      })
      .pipe(map(({ data }) => data?.tickerUnsubscribe));
  }

  tickerSubscribe(variables: { symbol: string }) {
    return this.apollo
      .subscribe<{ tickerSubscribe: Ticker }>({
        query: tickerSubscribe,
        variables,
      })
      .pipe(map(({ data }) => data?.tickerSubscribe));
  }
}
