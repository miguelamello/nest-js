import { Model } from 'mongoose';
import { Injectable, Request } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Stock, StockDocument } from './stocks.schema';
import { JwtService } from '@nestjs/jwt';
import Quote from '../interfaces/quote.interface';
import { DecodedToken } from '../interfaces/decodedToken.interface';

@Injectable()
export class StocksService {

  private entreyPoint: string;
  private apiKey: string; 

  constructor(
    @InjectModel(Stock.name) private stockModel: Model<StockDocument>, 
    @InjectConnection() private connection: Connection,
    private readonly jwtService: JwtService
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

  getUserId(request: Request): string {
    const authorizationHeader = request.headers['authorization'];
    const token = authorizationHeader.split(' ')[1];
    const decodedToken = this.jwtService.decode(token) as DecodedToken;
    const email = decodedToken.email;
    return email;
  }

}
