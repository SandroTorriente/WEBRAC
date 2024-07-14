import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Roll } from 'src/common/enums/roll.enum';


export class UpdateUserRollDto {
  

  @IsNotEmpty()
  @IsString()
  roll: Roll;
}