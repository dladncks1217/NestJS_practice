
import { Connection } from 'typeorm';
import { Seeder, Factory } from "typeorm-seeding";
import { Users } from '../../entities/Users';
import { Posts } from '../../entities/Posts';

export class CreateInitialData implements Seeder{
    public async run(factory:Factory, connection:Connection):Promise<any>{
        await connection
        .createQueryBuilder() // 쿼리빌더
        .insert()
        .into(Users)
        .values([{id:1, email:'dlaxodud1217@gmail.com', name:'임우찬', age:23}])
        .execute();
        await connection
        .createQueryBuilder()
        .insert()
        .into(Posts)
        .values([{id:1, title:"시딩을 이용한 첫 게시글", contents:"안녕하세요", UserId:1}])
        .execute();
    }
}