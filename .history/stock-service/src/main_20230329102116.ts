import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostname = '64.225.0.116'; 
  await app.listen(3001);
}

bootstrap();
