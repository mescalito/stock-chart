import { Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { TickerDto } from './tickers.dto';
import { TickersService } from './tickers.service';

@Resolver('ticker')
export class TickersResolver {
  constructor(private tickersService: TickersService) {}

  @Query()
  tickers(): Observable<TickerDto[]> {
    return this.tickersService.getTickers();
  }
}
