import { 
  Controller, Get, StreamableFile, Header, Inject  
} from '@nestjs/common';
import { Logger } from 'winston';


@Controller()
export class AppController {
  constructor(
    @Inject('winston') private readonly logger: Logger
  ) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDoc(): StreamableFile {
    return this.appService.getDoc(); 
  }

}
