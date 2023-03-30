/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import Quote from './interfaces/quote.interface';

@Injectable()
export class AppService {

  private stooqApiKey = 'sd2t2ohlcvn&h'; 

  constructor() {
    this.stooqApiKey = 'sd2t2ohlcvn&h';
  }

  async #getUpdatedQuote( symbol: string ): Promise<Quote> {
    const promisse = await fetch(`https://stooq.com/q/l/?s=${symbol}&f=${this.stooqApiKey}&e=json`);
    const response = await promisse.json();
    return (response.symbols[0].name) ? response.symbols[0] : '{}';
  }

  getDoc(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'documentation.html'));
    return new StreamableFile(file);
  }
  
  getQuote( symbol: string ): Promise<Quote> {
    return this.#getUpdatedQuote( symbol );
  }

}
