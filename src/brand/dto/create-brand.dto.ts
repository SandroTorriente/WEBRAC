import { IsNotEmpty } from "class-validator/types/decorator/common/IsNotEmpty";
import { IsNumber } from "class-validator/types/decorator/typechecker/IsNumber";

export class CreateBrandDto {
    @IsNotEmpty()
    @IsNumber()
    brand_name: string;

    @IsNotEmpty()
    @IsNumber()
    brand_code: string;
}
