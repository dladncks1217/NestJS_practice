import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/Users';
import { Posts } from './entities/Posts';
import *as ormconfig from '../ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }), 
    UsersModule, 
    PostsModule,
    Users,
    Posts,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Users]), // 추가
  ],
  controllers: [
    AppController, 
    UsersController, 
    PostsController
  ],
  providers: [
    AppService, 
    UsersService, 
    PostsService
  ],
})
export class AppModule {}
