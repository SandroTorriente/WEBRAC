import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { country } from './entities';

@Controller('country')
export class CountryController {

  constructor(private readonly country_service:CountryService){
  }

  @Get()
  get_countrys():Promise<country[]>{
      return this.country_service.get_countrys();
  }

  @Get(':id')
  get_country(@Param('country_code') country_code:string):Promise<country>{
      return this.country_service.get_country(country_code);
  }

  @Post()
  create_country(@Body() name: CreateCountryDto): Promise<country> {
      return this.country_service.create_country(name);
  }


  @Delete(':id')
  delete_country(@Param('country_code')country_code:string):Promise<void>{
      return this.country_service.delete_country(country_code);
  }
}
