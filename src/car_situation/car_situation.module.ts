import { Module } from '@nestjs/common';
import { CarSituationService } from './car_situation.service';
import { CarSituationController } from './car_situation.controller';

@Module({
  controllers: [CarSituationController],
  providers: [CarSituationService],
})
export class CarSituationModule {}
