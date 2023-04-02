import { 
  Controller, Get, StreamableFile, Header, 
  HttpException, HttpStatus, Inject, UseGuards 
} from '@nestjs/common';
import { Logger } from 'winston';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import Quote from './interfaces/quote.interface';
import { Symbol } from './decorators/symbol.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    @Inject('winston') private readonly logger: Logger
  ) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDoc(): StreamableFile {
    return this.appService.getDoc(); 
  }

}
