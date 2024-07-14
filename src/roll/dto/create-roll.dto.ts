import { IsString } from "class-validator";
import { Roll } from "src/common/enums/roll.enum";

export class CreateRollDto{
    @IsString()
    readonly roll_code:Roll;

    @IsString()
    readonly roll_name:Roll;
}