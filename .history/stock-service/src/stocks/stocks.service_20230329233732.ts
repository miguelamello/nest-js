import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Stock, StockDocument } from './stocks.schema';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class StocksService {}
