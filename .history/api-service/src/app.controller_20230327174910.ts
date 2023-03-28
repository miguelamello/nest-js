import { Controller, Get, StreamableFile, Header, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDoc(): StreamableFile {
    return this.appService.getDoc();
  }

  @Get('/quote')
  getQuote(@Param('symbol') symbol: string): string {
    return this.appService.getQuote();
  }
}
