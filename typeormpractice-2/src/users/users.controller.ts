import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('USERS')
@Controller('users')
export class UsersController {
    constructor(private UsersService:UsersService){}

    @Get(':email')
    async getUsers(@Res() res:Response, @Param() param){
        let user1 = await this.UsersService.getUser(param.email);
        console.log(user1)
        res.json(user1);
    }

    @Post()
    async createUser(@Body() body){
        await this.UsersService.createUser(body.email, body.name, body.age);
    }
}
