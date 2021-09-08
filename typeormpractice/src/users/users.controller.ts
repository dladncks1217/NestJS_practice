import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorator/user.decorator';
import { UsersService } from './users.service';


@ApiTags('USER')
@Controller('users')
export class UsersController {
    constructor(private UserService:UsersService){}

    @Get()
    getUsers(@User() user){
        return user;
    }

}
