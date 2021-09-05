import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery, ApiParam } from '@nestjs/swagger';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('USER')
@Controller('user')
export class UserController {
    constructor(private UserService:UserService){}

    @ApiResponse({
        status:200,
        description:'성공',
        type:UserDTO
    })
    @ApiResponse({
        status:500,
        description:'서버 에러',
    })
    @ApiOperation({summary:'내 정보 조회'})
    @Get('myinformation')
    getUser(){ // 내 정보 조회
        // 내 정보 가져오는 코드
    }

    @ApiOperation({summary:'내 정보 기입'})
    @Post()
    postUser(@Body() body:UserDTO){ // 내 정보 기입
        this.UserService.postUser(body.email, body.nickname, body.age);
    }

    @ApiResponse({
        status:200,
        description:'성공',
        type:UserDTO
    })
    @ApiResponse({
        status:500,
        description:'서버 에러',
    })
    @ApiQuery({
        name: 'query',
        required: true,
        description: '~~~~쿼리'
        
    })
    @ApiParam({
        name: 'nick',
        required: true,
        description: '사용자 닉네임'
        
    })
    @ApiOperation({summary:'특정 닉네임의 정보 가져오기'})
    @Get(':nick/information') // 특정닉의 정보
    getId(@Param() param, @Query() query){
        console.log()
    }

}
