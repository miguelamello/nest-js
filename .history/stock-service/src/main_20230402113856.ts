import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostname = 'localhost'; // stock-service.io
  const port = 3001;
  await app.listen(port, hostname, () => {
    console.log(`Application is running on: http://${env.app_host}:${env.app_port}`);
  });
}

bootstrap();
