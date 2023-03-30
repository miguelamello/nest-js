import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Stock, StockDocument } from './users.schema';
import CreateStockDto from './create-stock.dto';

@Injectable()
export class UsersService {}
