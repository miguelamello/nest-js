import { Controller, Get } from '@nestjs/common';

@Controller('stocks')
export class StocksController {

  @Get('/mongo')
  getMongo(): string {
    return 'MongoDB';
  } 

  @Get('/stocks/:symbol')
  getStock(): string {
    return 'Stock';
  }

}
