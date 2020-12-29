import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from 'server/environment';
import { TickerDto } from './tickers.dto';

@Injectable()
export class TickersService {
  private apiUrl = `http://api.marketstack.com/v1/intraday?access_key=${config.stackAccessKey}&symbols=`;

  constructor(private http: HttpService) {}

  getTickers(): Observable<TickerDto[]> {
    return this.http
      .get(`${this.apiUrl}AAPL&limit=2`)
      .pipe(map(({ data }) => data?.data));
  }
}
