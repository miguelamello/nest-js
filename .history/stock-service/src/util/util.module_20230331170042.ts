import { Module, Global } from '@nestjs/common';
import { UtilService } from './util.service';

@Module({
  providers: [UtilService], 
  exports: [UtilService]
})
export class UtilModule {}
