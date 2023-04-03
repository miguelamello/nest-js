import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const host = env.app_host;
  const port = env.app_port;
  await app.listen(host, port, () => {
    console.log(`Application is running on: http://${host}:${env.app_port}`);
  });
}

bootstrap();
