import { Controller, Get } from '@nestjs/common';
import

@Controller('stocks')
export class StocksController {

  @Get('/mongo')
  getMongo(): string {
    return 'MongoDB';
  }

}
