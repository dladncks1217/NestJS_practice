import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { localAuthGuard } from 'src/auth/local-auth.guard';
import { Users } from 'src/common/decorator/users.decorator';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @ApiResponse({
    type: String,
  })
  @ApiOperation({ summary: '로그인 세션 유지 확인용' })
  @Get('logincheck')
  loginCheck(@Req() req) {}

  @ApiResponse({
    type: Object,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post('join')
  async join(@Body() body) {
    await this.UsersService.join(
      body.email,
      body.name,
      body.age,
      body.password,
    );
  }

  @UseGuards(localAuthGuard)
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  login(@Users() user) {
    return user;
  }

  @ApiResponse({
    type: String,
  })
  @ApiOperation({ summary: '로그아웃' })
  @Get('logout')
  logout() {}
}
