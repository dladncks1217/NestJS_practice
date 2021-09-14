import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'; // entity에 query날리는건 repository임.
import { Users } from 'src/entities/Users';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)  // 이거 인젝션하는법 module파일에서 TypeOrmModule.forFeature쓰자.
        private usersRepository: Repository<Users>,
    ){}

    async getUser(email:string){
        let user = await this.usersRepository.findOne({
            where:{email},
        })
        return user;
    }

    async createUser(email:string, name:string, age:number){
        await this.usersRepository.save({
            email,
            name,
            age,
        })
    }
}
