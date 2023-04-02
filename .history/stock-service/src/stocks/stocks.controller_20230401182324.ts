import { Controller, Get, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import Quote from '../interfaces/quote.interface';
import { Symbol } from '../decorators/symbol.decorator';
import { StocksService } from './stocks.service';
import Message from '../interfaces/message.interface';
@Controller('stocks')
export class StocksController {

  constructor(
    private readonly stocksService: StocksService, 
    private readonly jwtService: JwtService
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
      const authorizationHeader = request.headers['authorization'];
      const token = authorizationHeader.split(' ')[1];
      const decodedToken = this.jwtService.decode(token);
      console.log(decodedToken);
      //this.stocksService.saveQuote(response);
      return response;
    }
    return { statusCode: 400, message: 'A valid stock symbol is required.' }
  }

}
