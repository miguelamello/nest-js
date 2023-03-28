import { Controller, Get, StreamableFile, Header } from '@nestjs/common';
import { AppService } from './app.service';
import Quote from './interfaces/quote.interface';
import { Symbol } from './decorators/symbol.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDoc(): StreamableFile {
    return this.appService.getDoc(); 
  }

  @Get('/quote/:symbol')
  getQuote(@Symbol() symbol: string): Promise<Quote> {
    try {
      const quote = await this.appService.getQuote(symbol);
      return quote;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return this.appService.getQuote( symbol );
  }
}
