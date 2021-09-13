import { ApiProperty } from "@nestjs/swagger";

export class PostsDTO{
    @ApiProperty({
        example: 1,
        description:'포스트 번호',
        required : true,
    })
    public postId : number;

    @ApiProperty({
        example:'dlaxodud1217@naver.com',
        description:'이메일',
        required:true,
    })
    public title : string;


    @ApiProperty({
        example:'임우찬',
        description:'이름',
        required:true,
    })
    public contents : string;
}