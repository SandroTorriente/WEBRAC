import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RollService } from './roll.service';
import { CreateRollDto } from './dto/create-roll.dto';

import { Roll } from './entities';

@Controller('roll')
export class RollController { constructor(private readonly roll_service:RollService){
    }

    @Get()
    get_roles():Promise<Roll[]>{
        return this.roll_service.get_rolls();
    }

    @Get(':id')
    get_role(@Param('roll_code') roll_code:string):Promise<Roll>{
        return this.roll_service.get_roll(roll_code);
    }

    @Post()
    create_role(@Body() type_situation: CreateRollDto): Promise<Roll> {
        return this.roll_service.create_roll(type_situation);
    }


    @Delete(':id')
    delete_role(@Param('roll_code') roll_code:string):Promise<void>{
        return this.roll_service.delete_roll(roll_code);
    }}
