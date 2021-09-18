import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { Users } from 'src/common/decorator/users.decorator';

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

    @Post('join')
    async Join(@Body() body){
        await this.UsersService.Join(body.email, body.name, body.age, body.password);
    }
}
