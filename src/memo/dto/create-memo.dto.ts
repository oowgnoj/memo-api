import { IsString } from 'class-validator';

export class CreateMemoDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly contents: string;
}
