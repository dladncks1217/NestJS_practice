import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './httpException.filter';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
  .setTitle('ExceptionFilter, ValidatePipe Example API')
  .setDescription('ExceptionFilter, ValidatePipe 예제 API 문서입니다.')
  .setVersion('1.0')
  .addCookieAuth('connect.sid')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app,document)

  app.use(cookieParser());
  app.use(
    session({
      resave:false,
      saveUninitialized:false,
      secret:process.env.COOKIE_SECRET,
      cookie:{
        httpOnly:true,
      }
    }),  
  );

  await app.listen(port);
  console.log(`Listening on port ${port}`);
  
  if(module.hot){
    module.hot.accept();
    module.hot.dispose(()=>app.close());
  }
}
bootstrap();
