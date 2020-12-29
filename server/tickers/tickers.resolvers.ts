import { Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { TickerDto } from './tickers.dto';
import { TickersService } from './tickers.service';

@Resolver('Ticker')
export class TickersResolver {
  constructor(private tickersService: TickersService) {}

  @Query('tickers')
  tickers(): Observable<TickerDto[]> {
    return this.tickersService.getTickers();
  }
}
