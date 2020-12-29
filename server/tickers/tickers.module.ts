import { HttpModule, Module } from '@nestjs/common';
import { TickersResolver } from './tickers.resolvers';
import { TickersService } from './tickers.service';

@Module({
  imports: [HttpModule],
  providers: [TickersService, TickersResolver],
})
export class TickersModule {}
