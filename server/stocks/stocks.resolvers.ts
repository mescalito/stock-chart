import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TickersService } from 'server/tickers/tickers.service';
import { StockDto } from './stocks.dto';
import { StocksService } from './stocks.service';

@Resolver('Stock')
export class StocksResolver {
  constructor(
    private stocksService: StocksService,
    private tickerService: TickersService,
  ) {}

  @Query('stocks')
  async stocks(): Promise<StockDto[]> {
    return await this.stocksService.getStocks();
  }

  @Mutation('addStock')
  async addStock(@Args('symbol') symbol: string): Promise<StockDto> {
    try {
      const ticker = await this.tickerService.getTickers(symbol).toPromise();
      const { last, open, close, exchange } = ticker[0];
      const newStock = { exchange, symbol, last, open, close };
      return await this.stocksService.createOne(newStock);
    } catch (error) {
      return error;
    }
  }

  @Mutation('deleteStock')
  async deleteStock(@Args('id') id: string): Promise<boolean> {
    return await this.stocksService.deleteOne(id);
  }
}
