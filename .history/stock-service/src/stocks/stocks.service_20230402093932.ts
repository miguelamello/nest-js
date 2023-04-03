import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Stock, StockDocument } from './stocks.schema';
import { JwtService } from '@nestjs/jwt';
import { Quote } from '../interfaces/quote.interface';
import { DecodedToken } from '../interfaces/decodedToken.interface';
import { UsersService } from  '../users/users.service';

@Injectable()
export class StocksService {

  private entreyPoint: string;
  private apiKey: string; 

  constructor(
    @InjectModel(Stock.name) private stockModel: Model<StockDocument>, 
    @InjectConnection() private connection: Connection,
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {
    this.entreyPoint = 'http://localhost:3000/quote/';
    this.apiKey = ''; 
  }

  async #getUpdatedQuote( symbol: string ): Promise<Quote> {
    const promisse = await fetch(`${this.entreyPoint}${symbol}`);
    const response = await promisse.json();
    return (response.name) ? response : '{}';
  }

  async saveQuote(quote: Quote): Promise<any> {
    const item = new this.stockModel(quote);
    item.save();
  }

  async findAll(): Promise<Stock[]> {
    return this.stockModel.find().exec();
  }

  async getQuote( symbol: string ): Promise<Quote> {
    return await this.#getUpdatedQuote( symbol );
  }

  async getHistory( userId: string ): Promise<any> {
    return this.stockModel.aggregate([
      { $match: { user: userId } },
      {
        $addFields: {
          datetime: {
            $dateFromString: {
              dateString: { $concat: ['$data', 'T', '$time'] },
              format: '%Y-%m-%dT%H:%M:%S.%L',
              timezone: 'UTC'
            }
          }
        }
      },
      { $sort: { datetime: -1 } }
    ]).exec();
  }

  async getUserId(request: Request): Promise<any> {
    const authorizationHeader = request.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    const decodedToken = this.jwtService.decode(token) as DecodedToken;
    const user = await this.usersService.getUser(decodedToken.username);
    return (user._id) ? user._id : 0;
  }

}
