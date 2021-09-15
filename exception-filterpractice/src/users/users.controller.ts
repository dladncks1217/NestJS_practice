import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { undefinedToNullInterceptor } from 'src/interceptors/undefinedToNull.interceptor';
import { UsersService } from './users.service';

@UseInterceptors(undefinedToNullInterceptor)
@Controller('users')
export class UsersController {
    constructor(private UsersService:UsersService){}

    @Post()
    async Join(@Body() body){
        await this.UsersService.Join(body.email, body.name, body.password);
    }
}
