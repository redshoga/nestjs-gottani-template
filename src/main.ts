import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { requestLoggerMiddleware } from './request-logger.middleware';
import { ConfigService } from './config/config.service';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Basic Authentication Setting
  const config = app.get<ConfigService>('ConfigService');

  // CORS Enable Setting
  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  // Logger(Morgan) Setting
  app.use(logger('dev'));

  // Logger(Original) Setting
  app.use(requestLoggerMiddleware);

  // Security Settings
  app.use(helmet());

  // Vlidation Settings
  app.useGlobalPipes(new ValidationPipe());

  // Swagger Settings
  const options = new DocumentBuilder()
    .setBasePath(config.apiVersion)
    .setTitle('API Title')
    .setDescription('The API description')
    .setVersion('1.0')
    // .addBearerAuth('Authorization', 'header')
    // .setSchemes('https', 'http')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // Versioning
  app.setGlobalPrefix(config.apiVersion);

  // Start
  await app.listen(process.env.PORT || 3000);

  // HMR
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
