import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Stock from './stock.interface';
import { StockSchema } from './stock.schema';

@Injectable()
export class StockModel {
  constructor(
    @InjectModel('Book')
    private readonly Model: Model<Book>,
  ) {}

  async create(book: Book): Promise<Book> {
    const createdBook = new this.Model(book);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.Model.find().exec();
  }

  async findById(id: string): Promise<Book> {
    return this.Model.findById(id).exec();
  }

  async update(id: string, book: Book): Promise<Book> {
    return this.Model.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  async delete(id: string): Promise<Book> {
    return this.Model.findByIdAndRemove(id).exec();
  }
}
