import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import Quote from '../interfaces/quote.interface';
import { Symbol } from '../decorators/symbol.decorator';
import { StocksService } from './stocks.service';
import Message from '../interfaces/message.interface';
@Controller('stocks')
export class StocksController {

  constructor(
    private readonly stocksService: StocksService
  ) {}

  @Get('/mongo')
  getMongo(): string {
    return 'MongoDB';
  } 

  @Get('/:symbol')
  //@UseGuards(AuthGuard('jwt'))
  async getQuote(@Symbol() symbol: string): Promise<Quote | Message> {
    if ( symbol.length > 0 ) { return this.stocksService.getQuote(symbol) }
    return { statusCode: 400, message: 'A valid stock symbol is required.' };
  }

}
