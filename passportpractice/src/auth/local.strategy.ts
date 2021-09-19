import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local';
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super({usernameFeild:'email', passwordFeild:'password'});
    }
    async validate(email:string, password:string, done:CallableFunction){
        const user = await this.authService.validateUser(email, password);
        if(!user){
            throw new UnauthorizedException(); // 401던져주는 친구. 여기에 걸리면 httpExceptionFilter.ts에 걸림.
        }
        return done(null, user); // local-auth.guard  의 req.login 으로 간 뒤 serializeUser로 간다.
    }
}