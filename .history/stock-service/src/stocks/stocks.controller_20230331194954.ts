import { 
  Controller, Get, HttpException, 
  HttpStatus, UseGuards 
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import Quote from '../interfaces/quote.interface';
import { Symbol } from '../decorators/symbol.decorator';
import { StocksService } from '../app.service';
@Controller('stocks')
export class StocksController {

  constructor(private readonly stocksService: StocksService) {}

  @Get('/mongo')
  getMongo(): string {
    return 'MongoDB';
  } 

  @Get('/:symbol')
  @UseGuards(AuthGuard('jwt'))
  getQuote(@Symbol() symbol: string): Promise<Quote> {
    if ( symbol.length > 0) {
      return this.appService.getQuote(symbol);
    }
    throw new HttpException("A valid stock symbol is required.", HttpStatus.BAD_REQUEST);
  }

}
