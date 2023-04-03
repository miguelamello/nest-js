import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import yaml from 'js-yaml';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // Generate the Swagger documentation based on the JSON file
  const document = require('swagger.json');

  // Set up the Swagger UI endpoint
  const customOptions = {
    customSiteTitle: 'Stock Quote API Docs'
  }

  SwaggerModule.setup('api', app, document, customOptions);

  await app.listen(env.app_port, env.app_host, () => {
    console.log(`Application is running on: http://${env.app_host}:${env.app_port}`);
  });

}

bootstrap();
