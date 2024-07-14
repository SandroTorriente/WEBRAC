import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roll } from './entities';
import { Repository } from 'typeorm';
import { CreateRollDto } from './dto';

@Injectable()
export class RollService {
    constructor(@InjectRepository(Roll) private readonly roll_repository:Repository<Roll>) {}

     async get_rolls():Promise<Roll[]>{
        return await this.roll_repository.find();
    }

    async get_roll(roll_code: string):Promise<Roll>{
        const Roll = await this.roll_repository.findOne({ where: { roll_code } });
        

        if(!Roll){
            throw new NotFoundException(`Role with id ${roll_code} not found`);
        }
        return Roll;
        
    }

    async create_roll({roll_name}:CreateRollDto){
        const newroll = this.roll_repository.create({
            roll_name
        });

        return this.roll_repository.save(newroll);

       
    }

    async delete_roll(roll_code: string): Promise<void> {
        const Roll: Roll = await this.get_roll(roll_code);
        await this.roll_repository.delete(Roll);
    }
}