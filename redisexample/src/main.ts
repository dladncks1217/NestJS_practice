import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import connectRedis from 'connect-redis';

let RedisStore = connectRedis(session);

import redis from 'redis';

import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from 'httpException.filter';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    logErrors: true,
  });

  app.useGlobalPipes(new ValidationPipe()); // httpException.filter.ts 통해 에러메시지 변경 가능
  app.useGlobalFilters(new HttpExceptionFilter()); // 모든 컨트롤러에서 발생하는 HttpException을 얘가 걸러줄거임.

  const config = new DocumentBuilder()
    .setTitle('redis session 사용 예제 API')
    .setDescription('redis session 사용 예제 API 문서입니다.')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
      },
      store: new RedisStore({ client }),
    }),
  );

  app.use(passport.initialize()); // 얘네 넣어줘야 세션 제대로 동작함.
  app.use(passport.session());
  await app.listen(port);
  console.log(`Listening on port ${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
