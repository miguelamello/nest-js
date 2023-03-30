import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import User from './stock.interface';
import { UserSchema } from './stock.schema';

@Injectable()
export class UserModel {
  constructor(
    @InjectModel('Book')
    private readonly stockModel: Model<User>,
  ) {}

  async create(stock: User): Promise<User> {
    const createdUser = new this.stockModel(stock);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.stockModel.find().exec();
  }

  async findById(id: string): Promise<User> {
    return this.stockModel.findById(id).exec();
  }

  async update(id: string, stock: User): Promise<User> {
    return this.stockModel.findByIdAndUpdate(id, stock, { new: true }).exec();
  }

  async delete(id: string): Promise<User> {
    return this.stockModel.findByIdAndRemove(id).exec();
  }
}
