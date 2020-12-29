import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StocksEntity } from './stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StocksEntity])],
  providers: [],
})
export class StocksModule {}
