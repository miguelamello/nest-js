import { Controller, Get, StreamableFile, Header, Param, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import Quote from './interfaces/quote.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDoc(): StreamableFile {
    return this.appService.getDoc();
  }

  @Get('/quote/:symbol')
  getQuote(@Param('symbol', ValidationPipe) symbol: string): Quote {
    return {  }
    //return this.appService.getQuote( symbol ); 
  }
}
