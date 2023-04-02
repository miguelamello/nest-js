import { 
  Controller, Get, StreamableFile, Header, 
  HttpException, HttpStatus, Inject 
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

  @Get('/stock/:symbol')
  @UseGuards(AuthGuard('jwt'))
  getQuote(@Symbol() symbol: string): Promise<Quote> {
    if ( symbol.length > 0) {
      return this.appService.getQuote(symbol);
    }
    throw new HttpException("A valid stock symbol is required.", HttpStatus.BAD_REQUEST);
  }

}
