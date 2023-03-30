import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock, StockDocument } from './stocks.schema';
import { CreateStockDto } from './stocks.dto';

@Injectable()
export class StocksService {

  constructor(@InjectModel(Stock.name) private stockModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

}
