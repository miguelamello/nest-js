import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { User, UserDocument } from './users.schema';
import CreateUserDto from './create-user.dto';

@Injectable()
export class UsersService {}
