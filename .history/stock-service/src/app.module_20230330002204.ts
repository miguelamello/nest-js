import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { WinstonLoggerService } from './winston.service';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from './mongodb/mongo.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(mongoConfig().uri), 
    WinstonModule.forRootAsync({
      useClass: WinstonLoggerService,
      imports: [ConfigModule, WinstonModule],
      inject: [ConfigService, WinstonModule],
    }), StocksModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})

export class AppModule {}
