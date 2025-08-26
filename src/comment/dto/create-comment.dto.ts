import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCommentDto {
  @IsString() @IsNotEmpty()
  postId: string;

  @IsString() @IsNotEmpty()
  content: string;

  @IsOptional() @IsString()
  parentId?: string;
}
