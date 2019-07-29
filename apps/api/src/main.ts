import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { getDbConnectionOptions } from './app/shared/utils';
import { ValidationPipe, Logger } from '@nestjs/common';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.forRoot(await getDbConnectionOptions(process.env.NODE_ENV)),
    {
      logger: console
    }
  );

  /**
   * Apply validation for all inputs globally
   */
  app.useGlobalPipes(
    new ValidationPipe({
      /**
       * Strip away all none-object existing properties
       */
      whitelist: true,
      /***
       * Transform input objects to their corresponding DTO objects
       */
      transform: true
    })
  );

  await await app.listen(port);

  Logger.log(`Server started running on http://localhost:${port}`, 'Bootstrap');
}

bootstrap();
