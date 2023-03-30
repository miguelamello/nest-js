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
    @InjectModel(User.name) private stockModel: Model<UserDocument>, 
    @InjectConnection() private connection: Connection
  ) { console.log(connection) }

  async create(CreateUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.stockModel(CreateUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.stockModel.find().exec();
  }

}
