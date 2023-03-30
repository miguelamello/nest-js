import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostname = 'localhost'; // stock-service
  await app.listen(3001);
}

bootstrap();
