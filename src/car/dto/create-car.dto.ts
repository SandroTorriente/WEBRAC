import { IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";

export class CreateCarDto {
    @IsNotEmpty()
    @IsString()
    lisenceplace: string;

    @IsNotEmpty()
    @IsString()
    model_code: string;
    
    @IsNotEmpty()
    @IsString()
    brand_code: string;

    @IsObject()
    situation: Partial<car_situation>;

    @IsNotEmpty()
    @IsNumber()
    rental_price: string;

    @IsNotEmpty()
    @IsNumber()
    extension_price: string;

    @IsNotEmpty()
    @IsString()
    color: string;

    @IsNotEmpty()
    @IsNumber()
    km_recorridos: string;
}
