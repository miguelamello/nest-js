import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import Quote from './interfaces/quote.interface';

@Injectable()
export class AppService {

  private stooqApiKey = 'sd2t2ohlcvn&h'; 

  async #getUpdatedQuote( symbol: string ): Quote {
    const response = await fetch(`https://stooq.com/q/l/?s={stock_code}&f=sd2t2ohlcvn&h&e=csv`);
    return await response.json();
  }

  getDoc(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'documentation.html'));
    return new StreamableFile(file);
  }
  
  getQuote( symbol: string ): Quote {
    return {};
  }

}
