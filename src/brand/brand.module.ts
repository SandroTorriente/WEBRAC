import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { brand } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([brand])],
  controllers:[BrandController],
  providers:[BrandService]
})
export class CountryModule {}
