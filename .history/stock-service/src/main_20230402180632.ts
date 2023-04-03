import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { env } from './env';
import

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // Generate the Swagger documentation based on the JSON/YAML file
  const document = SwaggerModule.createDocument(app, require('./swagger.yaml'));

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
