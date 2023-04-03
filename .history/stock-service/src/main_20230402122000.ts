import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const host = en
  await app.listen(env.app_host, '3002', () => {
    console.log(`Application is running on: http://${env.app_host}:${env.app_port}`);
  });
}

bootstrap();
