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
  const UIOptions = {
    customCss: `
      .swagger-ui .topbar-wrapper .link {
        display: none;
      }
      .swagger-ui .topbar-wrapper .title {
        font-size: 1.5em;
        margin-top: 10px;
        margin-bottom: 5px;
      }
      .swagger-ui .topbar-wrapper .title:after {
        content: "Routes";
        font-weight: 700;
      }
    `,
  };

  SwaggerModule.setup('api', app, document, UIOptions);

  await app.listen(env.app_port, env.app_host, () => {
    console.log(`Application is running on: http://${env.app_host}:${env.app_port}`);
  });

}

bootstrap();
