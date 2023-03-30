import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Stock.name, schema: StockSchema }])],
  controllers: [StocksController],
  providers: [StocksService],
})
export class UsersModule {}
