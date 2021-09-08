import { ApiProperty } from "@nestjs/swagger";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Users } from "./Users";

@Entity({ schema: 'sleact', name: 'posts' })
export class Posts{
    @PrimaryGeneratedColumn({type:'int',name:'id'})
    id:number;

    @ApiProperty({
        example:'아 배고프다',
        description:'글 제목',
      })
    @Column('varchar', {name:'title', length:30})
    title:string;  

    @ApiProperty({
        example:'먹을거 추천좀해주세요',
        description:'글 제목',
      })
    @Column('varchar', {name:'contents', length:100})
    contents:string;  

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;

    @Column('int', { name: 'UserId', nullable: false })
    UserId: number | null;

    @ManyToOne(()=>Users,(users)=>users.id,{
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
    })
    @JoinColumn([{ name: 'postUserId', referencedColumnName: 'id' }])
    PostUserId: Users;
}