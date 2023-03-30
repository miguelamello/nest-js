import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Stock, StockSchema } from './stocks.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: StockSchema }])],
  controllers: [StocksController],
  providers: [StocksService],
})
export class UsersModule {}
