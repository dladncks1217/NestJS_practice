import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Users } from 'src/common/decorator/users.decorator';
import { UsersService } from './users.service';

@ApiTags('USERS')
@Controller('users')
export class UsersController {
    constructor(private UsersService:UsersService){}

    @Get()
    getUsers(@Users() user){
        return user;
    }

}
