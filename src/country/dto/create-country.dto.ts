import { IsString } from "class-validator";

export class CreateCountryDto{
    @IsString()
    readonly country_name:string;

    @IsString()
    readonly country_code:string;
}