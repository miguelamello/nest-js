import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Stock from './stock.interfacestock.interface';
import { StockSchema } from './stock.schema';

@Injectable()
export class BookModel {
  constructor(
    @InjectModel('Book')
    private readonly bookModel: Model<Book>,
  ) {}

  async create(book: Book): Promise<Book> {
    const createdBook = new this.bookModel(book);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findById(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async update(id: string, book: Book): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id).exec();
  }
}
