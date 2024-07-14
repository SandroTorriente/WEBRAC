import { IsNotEmpty } from "class-validator/types/decorator/common/IsNotEmpty";
import { IsNumber } from "class-validator/types/decorator/typechecker/IsNumber";

export class CreateCarSituationDto {
    @IsNotEmpty()
    @IsNumber()
    situation_code: string;

    @IsNotEmpty()
    @IsNumber()
    situation: string;
}
