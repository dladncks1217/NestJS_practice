import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User';
import { AuthService } from './auth.service';
import { LocalSerializer } from './local.serializer';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule.register({ session: true }), // passport 필요하면 써야하는 코드.
    // session: true의 경우 jwt쓸거면 false로하면 됨.(세션저장 막기.)
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, LocalStrategy, LocalSerializer],
})
export class AuthModule {}
