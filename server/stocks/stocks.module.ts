import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TickersService } from 'server/tickers/tickers.service';
import { StocksEntity } from './stock.entity';
import { StocksResolver } from './stocks.resolvers';
import { StocksService } from './stocks.service';

@Module({
  imports: [TypeOrmModule.forFeature([StocksEntity]), HttpModule],
  providers: [StocksService, StocksResolver, TickersService],
})
export class StocksModule {}
