import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/User';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)  // 이거 인젝션하는법 module파일에서 TypeOrmModule.forFeature쓰자.
        private usersRepository: Repository<User>,
    ){}
    
    async Join(email:string, name:string, password:string){

    }
    
}
