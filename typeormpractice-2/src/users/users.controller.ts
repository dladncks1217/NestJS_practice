import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import {Response} from 'express';
import { ApiTags } from '@nestjs/swagger';
import { Users } from 'src/common/decorator/users.decorator';
import { UsersDTO } from 'src/common/dto/users.dto';
import { UsersService } from './users.service';

@ApiTags('USERS')
@Controller('users')
export class UsersController {
    constructor(private UsersService:UsersService){}

    @Get()
    async getUsers(@Res() res:Response){
        let user1 = await this.UsersService.getUser('dlaxodud1217@gmail.com');
        console.log(user1)
        res.json(user1);
    }

    @Post()
    createUser(@Body() body){
        this.UsersService.createUser(body.email, body.name, body.age);
    }
}
