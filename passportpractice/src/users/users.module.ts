import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])], // repository가 userService에 인젝션.
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
