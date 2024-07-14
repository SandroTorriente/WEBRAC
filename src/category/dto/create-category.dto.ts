import { IsNotEmpty } from "class-validator/types/decorator/common/IsNotEmpty";
import { IsNumber } from "class-validator/types/decorator/typechecker/IsNumber";

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsNumber()
    category_code: string;

    @IsNotEmpty()
    @IsNumber()
    category_name: string;
}
