import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? 'https://tu-dominio.com'
        : 'http://localhost:3000',
    credentials: true,
  });

  const port = process.env.API_PORT ?? 3001;
  await app.listen(port);
  console.warn(`API running on http://localhost:${port}/api`);
}

bootstrap();
