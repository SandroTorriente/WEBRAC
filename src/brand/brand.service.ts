import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { brand } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {

    constructor(@InjectRepository(brand) private readonly brand_repository: Repository<brand>){}
    
    async get_brands():Promise<brand[]>{
        return await this.brand_repository.find();
    }

    async get_brand(brand_code:string):Promise<brand>{
        const brand= await this.brand_repository.findOne({where:{brand_code}});

        if(!brand){
            throw new NotFoundException(`Country with id ${brand_code} not found`);
        }
        return brand;
    }

    async create_brand({brand_name}:CreateBrandDto){
        const brand = this.brand_repository.create({
            brand_name
        });

        return this.brand_repository.save(brand);       
    }

    async delete_brand(brand_code:string): Promise<void> {
        const brand: brand = await this.get_brand(brand_code);
        await this.brand_repository.delete(brand);
    }
}
