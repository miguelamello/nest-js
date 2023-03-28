import { Controller, Get, StreamableFile, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDoc(): StreamableFile {
    return this.appService.getDoc();
  }
}
