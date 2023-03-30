import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock, StockDocument } from './stocks.schema';
import { CreateStockDto } from './stocks.dto';

@Injectable()
export class StocksService {

  constructor(@InjectModel(Stock.name) private stockModel: Model<StockDocument>) {}

  async create(CreateStockDto: CreateStockDto): Promise<Stock> {
    const createdCat = new this.stockModel(CreateStockDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

}
