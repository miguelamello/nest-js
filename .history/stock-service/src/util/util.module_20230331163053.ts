import { Module } from '@nestjs/common';
import { UtilService } from './util.service';

@Module({})
export class UtilModule {
  static forRoot() {
    return {
      module: UtilModule,
      providers: [UtilService],
      exports: [UtilService],
    };
  }
}
