import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock, StockSchema } from './stocks.schema';

@Injectable()
export class StocksService {}
