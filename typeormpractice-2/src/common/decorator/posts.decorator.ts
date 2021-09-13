import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Posts = createParamDecorator(
    (data:unknown, ctx:ExecutionContext)=>{
        const request = ctx.switchToHttp().getRequest();
        return request.posts;
    }
)