import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { WinstonLoggerService } from './winston.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import mongoConfig from './mongo.config';
import { }
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';
import { UsersModule } from './users/users.module';
import { UtilModule } from './util/util.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(mongoConfig().uri), 
    WinstonModule.forRootAsync({
      useClass: WinstonLoggerService,
      imports: [ConfigModule, WinstonModule],
      inject: [ConfigService, WinstonModule],
    }), 
    JwtModule,
    StocksModule, 
    UsersModule, 
    UtilModule, 
    AuthModule, 
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    AuthService
  ],
  exports: [
    JwtModule
  ],
})

export class AppModule {}
