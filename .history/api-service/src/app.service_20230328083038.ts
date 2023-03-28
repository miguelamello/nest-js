import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import Quote from './interfaces/quote.interface';

@Injectable()
export class AppService {

  async #getUpdatedQuote( symbol: string ): Quote {
    const response = await fetch(`=${this.openExchangeRatesApiKey}`);
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
