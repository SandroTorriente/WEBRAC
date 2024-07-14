import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarSituationDto } from './dto/create-car_situation.dto';
import { car_situation } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CarSituationService {

    constructor(@InjectRepository(car_situation) private readonly car_situation_repository: Repository<car_situation>){}
    
    async get_car_situationss():Promise<car_situation[]>{
        return await this.car_situation_repository.find();
    }

    async get_car_situations(situation_code:string):Promise<car_situation>{
        const country= await this.car_situation_repository.findOne({where:{situation_code}});

        if(!country){
            throw new NotFoundException(`Country with id ${situation_code} not found`);
        }
        return country;
    }

    async create_car_situations({situation}:CreateCarSituationDto){
        const car_situation = this.car_situation_repository.create({
            situation
        });

        return this.car_situation_repository.save(car_situation);       
    }

    async delete_car_situations(country_code:string): Promise<void> {
        const country: car_situation = await this.get_car_situations(country_code);
        await this.car_situation_repository.delete(country);
    }
}

