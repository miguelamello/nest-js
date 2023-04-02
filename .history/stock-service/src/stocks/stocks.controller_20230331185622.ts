import { Controller, Get } from '@nestjs/common';

@Controller('stocks')
export class StocksController {

  @Get('/mongo')
  getMongo(): string {
    return 'MongoDB';
  } 

  @Get('/stock/:symbol')
  getStock( symbol: string ): string {
    return 'Stock';
  }

}
