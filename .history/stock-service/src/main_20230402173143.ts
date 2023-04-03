import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { env } from './env';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('STOCK QUOTE MICROSERVICE')
    .setDescription('This microservice aims to facilitate the acquisition of stock quotes from various companies. Please follow the documentation to get a complete understanding of how the service works.')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // Set up the Swagger UI endpoint
  const swaggerOptions = {
    swaggerCustomOptions.,
  };

  SwaggerModule.setup('api', app, document, swaggerOptions);

  await app.listen(env.app_port, env.app_host, () => {
    console.log(`Application is running on: http://${env.app_host}:${env.app_port}`);
  });

}

bootstrap();
