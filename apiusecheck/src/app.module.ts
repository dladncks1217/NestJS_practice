import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApirequestController } from './apirequest/apirequest.controller';
import { ApirequestService } from './apirequest/apirequest.service';
import { ApirequestModule } from './apirequest/apirequest.module';

@Module({
  imports: [
    ApirequestModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, ApirequestController],
  providers: [AppService, ApirequestService],
})
export class AppModule {}
