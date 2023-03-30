import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Stock from './stock.interface';
import { StockSchema } from './stock.schema';

@Injectable()
export class StockModel {
  constructor(
    @InjectModel('Book')
    private readonly stockModel: Model<Book>,
  ) {}

  async create(book: Book): Promise<Book> {
    const createdBook = new this.stockModel(book);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.stockModel.find().exec();
  }

  async findById(id: string): Promise<Book> {
    return this.stockModel.findById(id).exec();
  }

  async update(id: string, book: Book): Promise<Book> {
    return this.stockModel.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  async delete(id: string): Promise<Book> {
    return this.stockModel.findByIdAndRemove(id).exec();
  }
}
