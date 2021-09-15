import { ApiProperty } from "@nestjs/swagger";
import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';


@Entity({schema:'example2',name:'users'})
export class User{
    @ApiProperty({
        example:1,
        description:'사용자 고유번호',
      })
    @PrimaryGeneratedColumn({type:'int', name:'id'})
    Id:number;

    @ApiProperty({
        example:'dlaxodud1217@naver.com',
        description:'이메일',
      })
    @IsNotEmpty()
    @IsEmail()
    @Column('varchar', {name:'email', unique:true, length:30})
    email:string;

    @ApiProperty({
        example:'임우찬',
        description:'사용자이름',
      })
    @IsNotEmpty()
    @IsString()
    @Column('varchar', {name:'name', length:30})
    name:string;

    @ApiProperty({
        example:'a9s0d7f987(*&fE)F*^&)(*@&!',
        description:'비밀번호',
      })
    @IsNotEmpty()
    @IsString()
    @Column('varchar', {name:'password', length:100})
    password:string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
}