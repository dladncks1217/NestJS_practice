import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Posts } from 'src/common/decorator/posts.decorator';
import { PostsService } from './posts.service';

@ApiTags('POSTS')
@Controller('posts')
export class PostsController {
    constructor(private PostsService:PostsService){}

    @Get()
    getUsers(@Posts() post){
        return post;
    }

}
