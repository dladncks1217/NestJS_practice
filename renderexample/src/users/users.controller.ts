import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { localAuthGuard } from 'src/auth/local-auth.guard';
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

  @Get('authpage')
  @Render('auth')
  authpage(@Req() req) {
    if (req.isAuthenticated()) {
      let username = req.user.id;
      console.log('asdf');
      return username;
    } else {
      let username = '';
      return username;
    }
  }

  @ApiOperation({ summary: '회원가입' })
  @Redirect('authpage', 302)
  @Post('join')
  async Join(@Body() body) {
    await this.UsersService.Join(
      body.email,
      body.name,
      body.age,
      body.password,
    );
  }

  @UseGuards(localAuthGuard)
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  @Redirect('authpage', 302)
  LogIn(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  LogOut() {}
}
