import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { WinstonLoggerService } from './winston.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { env } from './env';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';
import { UsersModule } from './users/users.module';
import { UtilModule } from './util/util.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(env.mongo_uri), 
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

export class AppModule {
  configure() {
    const options = new DocumentBuilder()
      .setTitle('My API')
      .setDescription('API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);
  }
}
