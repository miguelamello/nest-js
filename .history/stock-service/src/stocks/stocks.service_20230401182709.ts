import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Stock, StockDocument } from './stocks.schema';
import { JwtService } from '@nestjs/jwt';
import Quote from '../interfaces/quote.interface';

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

  getQuote( symbol: string ): Promise<Quote> {
    return this.#getUpdatedQuote( symbol );
  }

  getUser

}
