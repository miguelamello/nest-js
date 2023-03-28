import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as winston from 'winston';
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'Logger',
      useFactory: (configService: ConfigService) => {
        const logger = winston.createLogger({
          level: configService.get('LOG_LEVEL'),
          transports: [
            new winston.transports.Console(),
          ],
        });
        return logger;
      },
      inject: [ConfigService],
    },
  ],
  exports: ['Logger'],
})
export class LoggerModule {}
