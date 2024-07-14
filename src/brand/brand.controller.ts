import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { brand } from './entities';

@Controller('brand')
export class BrandController {

  constructor(private readonly brand_service:BrandService){
  }

  @Get()
  get_countrys():Promise<brand[]>{
      return this.brand_service.get_brands();
  }

  @Get(':id')
  get_country(@Param('country_code') country_code:string):Promise<brand>{
      return this.brand_service.get_brand(country_code);
  }

  @Post()
  create_country(@Body() name: CreateBrandDto): Promise<brand> {
      return this.brand_service.create_brand(name);
  }


  @Delete(':id')
  delete_country(@Param('country_code')country_code:string):Promise<void>{
      return this.brand_service.delete_brand(country_code);
  }
}
