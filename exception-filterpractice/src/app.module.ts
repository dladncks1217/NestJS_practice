import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { User } from './entities/User';
import { TypeOrmModule } from '@nestjs/typeorm';
import *as ormconfig from '../ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    User,
    UsersModule,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [
    AppController, 
    UsersController
  ],
  providers: [
    AppService, 
    UsersService
  ], // 이 provider에 연결되어있는 것을 확인한 뒤 의존성 주입을 해준다.
})
export class AppModule {}
