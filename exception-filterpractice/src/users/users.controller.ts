import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { undefinedToNullInterceptor } from 'src/interceptors/undefinedToNull.interceptor';
import { UsersService } from './users.service';

@UseInterceptors(undefinedToNullInterceptor)
@ApiTags('USERS')
@Controller('users')
export class UsersController {
    constructor(private UsersService:UsersService){}

    @ApiResponse({
        status:200,
        description:'성공',
    })
    @ApiResponse({
        status:500,
        description:'서버 에러',
    })
    @Post()
    async Join(@Body() body){
        await this.UsersService.Join(body.email, body.name, body.password);
    }
}
