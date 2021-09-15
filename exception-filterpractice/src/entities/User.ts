import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({schema:'example2',name:'users'})
export class User{
    @PrimaryGeneratedColumn({type:'int', name:'id'})
    Id:number;

    @Column('varchar', {name:'email', unique:true, length:30})
    email:string;

    @Column('varchar', {name:'password', length:30})
    password:string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date | null;
}