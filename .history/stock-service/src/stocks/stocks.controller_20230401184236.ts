import { Controller, Get, UseGuards, Req, Request } from '@nestjs/common';
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
  @UseGuards(AuthGuard('jwt'))
  async getQuote(
    @Symbol() symbol: string, 
    @Req() request: Request
  ): Promise<Quote | Message> {
    const response = await this.stocksService.getQuote(symbol);
    if (response.symbol) {
      //this.stocksService.saveQuote(response);
      const userId = this.stocksService.getUserId(request);
      console.log();
      return response;
    }
    return { statusCode: 400, message: 'A valid stock symbol is required.' }
  }

}
