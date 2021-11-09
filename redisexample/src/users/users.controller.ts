import {
  Body,
  Controller,
  ExecutionContext,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoggedInGuard } from 'src/auth/isLoggedIn.guard';
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
  @UseGuards(LoggedInGuard)
  @Get('logincheck')
  loginCheck() {}

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

  @UseGuards(LoggedInGuard)
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('로그아웃 완료');
  }
}
