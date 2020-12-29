import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { info } from 'server/library/logger';
import { Repository } from 'typeorm';
import { StocksEntity } from './stock.entity';
import { StockDto } from './stocks.dto';

@Injectable()
export class StocksService {
  constructor(
    @InjectRepository(StocksEntity) private stockRepo: Repository<StocksEntity>,
  ) {}

  async getStocks(): Promise<StockDto[]> {
    return await this.stockRepo.find({});
  }

  async createOne(data: Partial<StockDto>): Promise<StockDto> {
    const newStock = this.stockRepo.create(data);
    return await newStock.save();
  }

  async updateOne(symbol: string, data: Partial<StockDto>): Promise<void> {
    try {
      await this.stockRepo.update({ symbol }, data);
    } catch (error) {
      info('cant find');
    }
  }

  async deleteOne(id: string): Promise<boolean> {
    const stock = await this.stockRepo.findOne({
      where: { id },
    });
    if (!stock) {
      throw new HttpException('stock not found', HttpStatus.NOT_FOUND);
    }
    const deletedStock = await this.stockRepo.remove(stock);
    return !deletedStock.id;
  }
}
