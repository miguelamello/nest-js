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
import { AuthModuleModule } from './auth/auth.module';
import 
import { PassportModule } from '@nestjs/passport';
import { UtilService } from './util/util.service';
import { UtilModule } from './util/util.module';

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
      secret: 'UxZ7tG7IdMbrVI1JKSSQTydoR9tqiX8y',
      signOptions: { expiresIn: '24h' }, // token expiration time set 24 hours
    }),
    StocksModule, 
    UsersModule, 
    AuthModuleModule, 
    PassportModule, UtilModule
  ],
  controllers: [AppController],
  providers: [AppService, UtilService],
})

export class AppModule {}
