import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { Users } from './entities/Users';
import { Posts } from './entities/Posts';
import *as ormconfig from '../ormconfig';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import dotenv from 'dotenv';

dotenv.config();
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
  ],
  controllers: [
    AppController,
    UsersController,
    PostsController,
  ],
  providers: [
    AppService,
    UsersService,
    PostsModule,
  ],
})
export class AppModule {}
