import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Stock from './create-stock.dto';
import { StockSchema } from '../stocks/stocks.schema';

@Injectable()
export class StockModel {
  constructor(
    @InjectModel('Book')
    private readonly stockModel: Model<Stock>,
  ) {}

  async create(stock: Stock): Promise<Stock> {
    const createdStock = new this.stockModel(stock);
    return createdStock.save();
  }

  async findAll(): Promise<Stock[]> {
    return this.stockModel.find().exec();
  }

  async findById(id: string): Promise<Stock> {
    return this.stockModel.findById(id).exec();
  }

  async update(id: string, stock: Stock): Promise<Stock> {
    return this.stockModel.findByIdAndUpdate(id, stock, { new: true }).exec();
  }

  async delete(id: string): Promise<Stock> {
    return this.stockModel.findByIdAndRemove(id).exec();
  }
}
