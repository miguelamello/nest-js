import { Controller, Get } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller('stocks')
export class StocksController {

  @Get('/mongo')
  getMongo(): string {
    return 'MongoDB';
  }

}
