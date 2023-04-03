import { Controller, Get, StreamableFile, Header, Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,
    @Inject('winston') private readonly logger: Logger
  ) {}

  @Get('/specs')
  @Header('Content-Type', 'text/html')
  getSpecs(): StreamableFile {
    return this.appService.getDoc(); 
  }

  @Get()
  @Header('Content-Type', 'text/html')
  getDoc(): StreamableFile {
    return this.appService.getDoc(); 
  }
  
}

