import { ApiProperty } from "@nestjs/swagger";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Posts } from "./Posts";

@Entity({ schema: 'sleact', name: 'users' })
export class Users{
    @ApiProperty({
        example:1,
        description:'사용자 아이디',
    })
    @PrimaryGeneratedColumn({type:'int',name:'id'})
    id:number;

    @ApiProperty({
        example:'dlaxodud1217@gmail.com',
        description:'이메일',
      })
    @Column('varchar', {name:'email', unique:true ,length:30})
    email:string;   

    @ApiProperty({
        example:'임우찬',
        description:'이름',
      })
    @Column('varchar',{name:'name', length:20})
    name:string;

    @ApiProperty({
        example: 23,
        description:'나이',
      })
    @Column('number',{name:'age'})
    age:number;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;

    @OneToMany(
        ()=>Posts,
        (posts)=>posts.UserId
    )
    OwnedUserPosts:Posts[]
}