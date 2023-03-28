import { Controller, Get, StreamableFile, Header, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Quote } from './quote';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDoc(): StreamableFile {
    return this.appService.getDoc();
  }

  @Get('/quote')
  getQuote(@Param('symbol') symbol: string): Quote {
    return this.appService.getQuote( symbol );
  }
}
