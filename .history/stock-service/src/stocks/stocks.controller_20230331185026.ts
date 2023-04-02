import { Controller, Get } from '@nestjs/common';
import Quote from '../interfaces/quote.interface';
import { Symbol } from '../decorators/symbol.decorator';

@Controller('stocks')
export class StocksController {

  @Get('/mongo')
  getMongo(): string {
    return 'MongoDB';
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
