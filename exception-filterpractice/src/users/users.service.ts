import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)  // 이거 인젝션하는법 module파일에서 TypeOrmModule.forFeature쓰자.
        private usersRepository: Repository<User>,
    ){}
    
    async Join(email:string, name:string, password:string){
        const user = await this.usersRepository.findOne({
            where:{email}
        });
        if(user){
            throw new UnauthorizedException('이미 존재하는 사용자입니다.');
            return;
        }
        const hashedpassword = await bcrypt.hash(password,12);
        await this.usersRepository.save({
            email,
            name,
            password: hashedpassword,
        })
    }
    
}

// 로직 정리
// 모듈 -> 컨트롤러 -> 서비스 -> 레포지토리 통해서 entity로 쿼리 날림.