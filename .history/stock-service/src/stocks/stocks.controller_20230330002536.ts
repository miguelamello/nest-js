import { Controller, Get } from '@nestjs/common';
import { Stock}

@Controller('stocks')
export class StocksController {

  @Get('/mongo')
  getMongo(): string {
    return 'MongoDB';
  }

}
