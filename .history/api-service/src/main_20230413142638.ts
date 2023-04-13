import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostname = 'localhost'; // remote-stock.io
  const port = 13000;
  await app.listen(port, hostname, () => {
    console.log(`Application is running on: http://${hostname}:${port}`);
  });
}

bootstrap();
