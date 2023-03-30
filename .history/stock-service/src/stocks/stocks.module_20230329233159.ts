import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';
import { Stock, StockSchema } from './stocks.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Stock, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class StocksModule {}
