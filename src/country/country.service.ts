import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { country } from './entities';
import { CreateCountryDto } from './dto';


@Injectable()
export class CountryService {

    constructor(@InjectRepository(country) private readonly country_repository: Repository<country>){}
    
    async get_countrys():Promise<country[]>{
        return await this.country_repository.find();
    }

    async get_country(country_code:string):Promise<country>{
        const country= await this.country_repository.findOne({where:{country_code}});

        if(!country){
            throw new NotFoundException(`Country with id ${country_code} not found`);
        }
        return country;
    }

    async create_country({country_name}:CreateCountryDto){
        const country = this.country_repository.create({
            country_name
        });

        return this.country_repository.save(country);       
    }

    async delete_country(country_code:string): Promise<void> {
        const country: country = await this.get_country(country_code);
        await this.country_repository.delete(country);
    }
}
