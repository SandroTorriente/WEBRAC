import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Roll } from 'src/common/enums/Roll.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsEmail()
  password:string

  @IsNotEmpty()
  @IsString()
  user_name: string;

  @IsNotEmpty()
  @IsString()
  roll:Roll;

  @IsNotEmpty()
  @IsEmail()
  email:string
}