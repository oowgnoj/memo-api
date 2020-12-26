import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { IsNull } from 'sequelize-typescript';

export class CreateMemoDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly contents: string;
}
