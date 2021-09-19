import { Injectable } from "@nestjs/common";
import { User } from "src/entities/User";
import { Repository } from "typeorm";
import bcrypt from "bcrypt";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class AuthService{
    constructor(@InjectRepository(User) private usersRepository:Repository<User>){}

    async validateUser(email:string, password:string){
        const user=await this.usersRepository.findOne({
            where:{email},
        });
        if(!user){
            return null;
        }
        const result = await bcrypt.compare(password, user.password);
        if(result){
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        return null;
    }
}