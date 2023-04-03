import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { WinstonLoggerService } from './winston.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import mongoConfig from './mongo.config';
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
    JwtModule.register({
      secret: '59569a17-6692-4dde-bb5d-ed9a1c00b5d9',
      signOptions: { expiresIn: '24h' }, // token expiration time set 24 hours
    }),
    StocksModule, 
    UsersModule, 
    UtilModule, 
    AuthModule, 
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
  exports: [JwtModule],
})

export class AppModule {}
