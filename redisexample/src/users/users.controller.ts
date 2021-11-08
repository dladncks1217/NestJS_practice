import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  join(@Body() body) {}

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  login() {}

  @ApiResponse({
    type: String,
  })
  @ApiOperation({ summary: '로그아웃' })
  @Get('logout')
  logout() {}
}
