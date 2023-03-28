import { Controller, Get, StreamableFile, Header, Param, ValidationPipe } from '@nestjs/common';
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
  getQuote(@Symbol() symbol: symbolEntity): Quote {
    return this.appService.getQuote( symbol ); 
  }
}
