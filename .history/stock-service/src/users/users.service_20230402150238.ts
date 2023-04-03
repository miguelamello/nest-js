import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UtilService } from '../util/util.service';
import { Message } from '../interfaces/message.interface';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>, 
    @InjectConnection() private connection: Connection, 
    private utilService: UtilService, 
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async validadeUser(email: string, password: string): Promise<any|Message> {
    const user = await this.userModel.findOne({ email, password }).exec();
    return (user) ? user : { statusCode: 400, message: 'User or Password is incorrect.' };
  }

  async getUser(email: string): Promise<any|Message> {
    const user = await this.userModel.findOne({ email }).exec();
    return (user) ? user : { statusCode: 400, message: 'User not found' };
  }

  async resetPassword(email: string): Promise<any|Message> { 
    const newpassword = this.utilService.getHash();
    return await this.userModel.findByIdAndUpdate(email, { newpassword });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

}
