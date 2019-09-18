import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as logger from 'morgan';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS Enable Setting
  app.enableCors({
    origin: '*',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  });

  // Logger(Morgan) Setting
  app.use(logger('dev'));

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
