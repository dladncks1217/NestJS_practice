import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Users } from 'src/common/decorator/users.decorator';
import { localAuthGuard } from 'src/auth/local-auth.gaurd';
import { LoggedInGuard } from 'src/auth/logged-in.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private UsersService:UsersService){}

    @ApiResponse({
        type:String
    })
    @ApiOperation({summary:'유저 이름 조회'})
    @Get('getuser')
    getUserName(@Users() user){
        return user.name;
    }


    @ApiOperation({summary:'회원가입'})
    @Post('join')
    async Join(@Body() body){
        await this.UsersService.Join(body.email, body.name, body.age, body.password);
    }

    @UseGuards(localAuthGuard)
    @ApiOperation({summary:'로그인'})
    @Post('login')
    logIn(@Users() user){
        return user
    }

    @UseGuards(LoggedInGuard)
    @ApiOperation({summary:'로그아웃'})
    @Post('logout')
    logOut(@Req() req, @Res() res){
        req.logOut();
        res.clearCookie('connect.sid', {httpOnly:true});
        res.send('로그아웃 완료');
    }

}
