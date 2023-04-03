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
//import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

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
      secret: '458100c6-31e5-432e-bd46-3b380c9a7875',
      signOptions: { expiresIn: '24h' }, // token expiration time set 24 hours
    }),
    StocksModule, 
    UsersModule, 
    UtilModule, 
    AuthModule, 
    PassportModule, 
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, /*JwtStrategy*/],
  exports: [JwtModule],
})

export class AppModule {}
