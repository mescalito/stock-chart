import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TickersEntity } from './ticker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TickersEntity])],
  providers: [],
})
export class TickersModule {}
