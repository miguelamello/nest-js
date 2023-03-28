import { Controller, Get, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDoc(): string {
    return this.appService.getDoc();
  }
}
