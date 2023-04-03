import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const host = env.app_host;
  const port = ;
  await app.listen(port, host, () => {
    console.log(`Application is running on: http://${host}:${port}`);
  });
}

bootstrap();
