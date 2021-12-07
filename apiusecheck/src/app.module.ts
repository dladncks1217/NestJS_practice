import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApirequestController } from './apirequest/apirequest.controller';
import { ApirequestService } from './apirequest/apirequest.service';
import { ApirequestModule } from './apirequest/apirequest.module';
import { GamedataController } from './gamedata/gamedata.controller';
import { GamedataService } from './gamedata/gamedata.service';
import { GamedataModule } from './gamedata/gamedata.module';
import * as ormconfig from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ApirequestModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GamedataModule,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([]),
  ],
  controllers: [AppController, ApirequestController, GamedataController],
  providers: [AppService, ApirequestService, GamedataService],
})
export class AppModule {}
