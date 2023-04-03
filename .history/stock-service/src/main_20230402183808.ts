import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerJson } from '../swagger'
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // Set up the Swagger UI endpoint
  const customOptions = {
    customSiteTitle: 'Stock Quote API Docs'
  }

  SwaggerModule.setup('api', app, swaggerJson, customOptions);

  await app.listen(env.app_port, env.app_host, () => {
    console.log(`Application is running on: http://${env.app_host}:${env.app_port}`);
  });

}

bootstrap();
