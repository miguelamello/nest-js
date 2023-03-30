import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { WinstonLoggerService } from './winston.service';
import { MongooseModule } from '@nestjs/mongoose';
import { connect, connection } from 'mongoose';
import mongoConfig from './mongodb/mongo.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.forRootAsync({
      useClass: WinstonLoggerService,
      imports: [ConfigModule, WinstonModule],
      inject: [ConfigService, WinstonModule],
    }),
    MongooseModule.forRootAsync({
      useFactory: async () => {
        //uri: mongoConfig().uri,
        //useNewUrlParser: true,
        //useUnifiedTopology: true,

        const connection = await connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

      },
    })
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})

export class AppModule {}
