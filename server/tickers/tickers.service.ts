import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from 'server/environment';
import { TickerDto } from './tickers.dto';

@Injectable()
export class TickersService {
  constructor(private http: HttpService) {}

  getTickers(symbol = 'AAPL', limit = 1): Observable<TickerDto[]> {
    const fetchUrl = `http://api.marketstack.com/v1/intraday?access_key=${config.stackAccessKey}&symbols=${symbol}&limit=${limit}`;
    return this.http.get(fetchUrl).pipe(map(({ data }) => data?.data));
  }
}
