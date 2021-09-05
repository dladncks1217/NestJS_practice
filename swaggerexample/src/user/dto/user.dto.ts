import { ApiProperty } from "@nestjs/swagger";

export class UserDTO{
    @ApiProperty({
        example:'dlaxodud2388@naver.com',
        description:'이메일',
        required:true,

    })
    public email: string;

    @ApiProperty({
        example:'병장임우찬',
        description:'닉네임',
        required:true,
        
    })
    public nickname: string;

    @ApiProperty({
        example:23,
        description:'나이',
        required:true,
        
    })
    public age: number;
}