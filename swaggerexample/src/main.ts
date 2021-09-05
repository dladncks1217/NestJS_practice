import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('API문서명')
  .setDescription('API문서 설명')
  .setVersion('1.0') // API 버전
  .addCookieAuth('connect.sid') // 쿠키 옵션
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api',app,document)
  await app.listen(3000);
}
bootstrap();
