import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.app_host, '3', () => {
    console.log(`Application is running on: http://${env.app_host}:${env.app_port}`);
  });
}

bootstrap();
