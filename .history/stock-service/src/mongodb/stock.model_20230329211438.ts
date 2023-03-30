import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Stock from './stock.interface';
import { StockSchema } from './stock.schema';

@Injectable()
export class StockModel {
  constructor(
    @InjectModel('Book')
    private readonly stockModel: Model<Stock>,
  ) {}

  async create(book: Stock): Promise<Stock> {
    const createdStock = new this.stockModel(book);
    return createdStock.save();
  }

  async findAll(): Promise<Stock[]> {
    return this.stockModel.find().exec();
  }

  async findById(id: string): Promise<Stock> {
    return this.stockModel.findById(id).exec();
  }

  async update(id: string, book: Stock): Promise<Stock> {
    return this.stockModel.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  async delete(id: string): Promise<Stock> {
    return this.stockModel.findByIdAndRemove(id).exec();
  }
}
