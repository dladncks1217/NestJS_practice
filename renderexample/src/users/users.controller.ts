import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Users } from 'src/common/decorator/user.decorator';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @ApiOperation({ summary: '유저 정보 조회' })
  @Get('getuser')
  getUserInformation(@Users() user) {
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('join')
  async Join(@Body() body) {
    await this.UsersService.Join(
      body.email,
      body.name,
      body.age,
      body.password,
    );
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  LogIn() {}

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  LogOut() {}
}
