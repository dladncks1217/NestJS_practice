import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'; // nestjs가 passport를 감싸며 guard를 새로 만들어둠.

// 이게 실행되면 local.strategy.ts가 실행됨.
@Injectable()
export class localAuthGuard extends AuthGuard('local'){ // passport.authenticate(local) 이런거라고 보면 됨.
    async canActivate(context:ExecutionContext):Promise<boolean>{
        const can = await super.canActivate(context);
        if(can){
            const request = context.switchToHttp().getRequest(); // context로부터 http꺼내와서 요청에 대한 것 할 수 있음.
            // 요청 정보 바탕으로 로그인.
            console.log('login for cookie');
            await super.logIn(request);
        }
        return true;
    }
}
// provider 는 service도 provider고 guard, interceptor 등 @injectable붙은 애들이면 전부 provider이다. 
// serializeuser, deserializeuser, localstrategy같은것들을 전부 provider로 만든다.