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
    return (symbol.length) ? this.appService.getQuote( symbol ) : new ForbiddenException();
  }
}
