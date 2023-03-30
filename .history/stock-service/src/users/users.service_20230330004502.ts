import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { User, UserDocument } from './users.schema';
import CreateUserDto from './create-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(Stock.name) private stockModel: Model<StockDocument>, 
    @InjectConnection() private connection: Connection
  ) { console.log(connection) }

  async create(CreateStockDto: CreateStockDto): Promise<Stock> {
    const createdStock = new this.stockModel(CreateStockDto);
    return createdStock.save();
  }

  async findAll(): Promise<Stock[]> {
    return this.stockModel.find().exec();
  }
  
}
