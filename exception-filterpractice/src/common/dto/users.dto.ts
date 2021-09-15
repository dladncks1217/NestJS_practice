import { ApiProperty } from "@nestjs/swagger";

export class UsersDTO{
    @ApiProperty({
        example:'dlaxodud1217@naver.com',
        description:'이메일',
        required:true,
    })
    public email : string;


    @ApiProperty({
        example:'임우찬',
        description:'이름',
        required:true,
    })
    public name : string;

    @ApiProperty({
        example:'asd67f476q54wearfytasdgfj',
        description:'비밀번호',
        required:true,
    })
    public password : string;
}