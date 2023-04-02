import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { User, UserDocument } from './users.schema';
import CreateUserDto from '../dto/create-user.dto';
import Message from '../interfaces/message.interface';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>, 
    @InjectConnection() private connection: Connection
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(CreateUserDto);
    return createdUser.save();
  }

  async validadeUser(email: string, password: string): Promise<User> {
    const user = await this.userModel.findOne({ email, password }).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async getUser(email: string): Promise<any|Message> {
    const user = await this.userModel.findOne({ email }).exec();
    return (user) ? user : { statusCode: 400, message: 'User not found' };
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

}
