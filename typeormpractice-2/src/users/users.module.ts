import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])], // 이렇게 repository가 userService에 인젝션이 됨.
    controllers: [UsersController],
    providers: [UsersService]
  })
export class UsersModule {}