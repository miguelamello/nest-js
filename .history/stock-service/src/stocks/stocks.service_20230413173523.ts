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
import { env } from '../env';

@Injectable()
export class StocksService {

  private entryPoint: string;
  private apiKey: string; 

  constructor(
    @InjectModel(Stock.name) private stockModel: Model<StockDocument>, 
    @InjectConnection() private connection: Connection,
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {
    this.entryPoint = `http://${env.api_host}:${env.api_port}/quote/`;
    this.apiKey = ''; 
  }

  async #getUpdatedQuote( symbol: string ): Promise<Quote> {
    const promisse = await fetch(`${this.entryPoint}${symbol}`);
    const response = await promisse.json();
    return (response.name) ? response : '{}';
  }

  async saveQuote(quote: Quote): Promise<any> {
    const item = new this.stockModel(quote);
    item.save();
  }

  async getQuote( symbol: string ): Promise<Quote> {
    return await this.#getUpdatedQuote( symbol );
  }

  async getHistory( userId: string ): Promise<any> {
    return this.stockModel.find({ user: userId })
    .sort({ date: -1 })
    .limit(100)
    .exec();
  }

  async getStat(): Promise<any> {
    return this.stockModel.aggregate([
      {
        $group: {
          _id: { symbol: { $toLower: "$symbol" }, name: { $toLower: "$name" } },
          times_requested: { $sum: 1 },
        },
      }, 
      {
        $project: {
          _id: 0,
          symbol: "$_id.symbol",
          name: "$_id.name",
          times_requested: 1,
        },
      },
      {
        $sort: { times_requested: -1 },
      },
    ])
    .limit(100)
    .exec();
  }

  async getUserId(request: Request): Promise<any> {
    const authorizationHeader = request.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    const decodedToken = this.jwtService.decode(token) as DecodedToken;
    const user = await this.usersService.getUser(decodedToken.username);
    return (user._id) ? user._id : 0;
  }

  async getUserRole(request: Request): Promise<any> {
    const authorizationHeader = request.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    const decodedToken = this.jwtService.decode(token) as DecodedToken;
    const user = await this.usersService.getUser(decodedToken.username);
    return (user._id) ? user.role : '';
  }

  formatCollection(collection: any): Quote[] {
    const newCollection: Quote[] = [];
    for (const item of collection) {
      // Format the collection for the client
      newCollection.push({
        'date': item.date,
        'name': item.name,
        'symbol': item.symbol,
        'open': item.open,
        'high': item.high,
        'low': item.low,
        'close': item.close
      });
    }
    return newCollection
  }
}
