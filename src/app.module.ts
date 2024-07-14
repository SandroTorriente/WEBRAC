import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TouristModule } from './tourist/tourist.module';
import { RollModule } from './roll/roll.module';
import { PaymentWayModule } from './payment_way/payment_way.module';
import { ModelModule } from './model/model.module';
import { DriverModule } from './driver/driver.module';
import { CountryModule } from './country/country.module';
import { ContractModule } from './contract/contract.module';
import { CategoryModule } from './category/category.module';
import { CarSituationModule } from './car_situation/car_situation.module';
import { CarModule } from './car/car.module';
import { BrandModule } from './brand/brand.module';
import { AuthModule } from './auth/auth.module';

/*@Module({
  imports: [UserModule, TouristModule, RollModule, PaymentWayModule, ModelModule, DriverModule, CountryModule, ContractModule, CategoryModule, CarSituationModule, CarModule, BrandModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}*/

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port: 5432,
    username:'postgres',
    password:'581829',
    database:'ProyectoWeb_BD_Rent_A_Car',
    autoLoadEntities:true,
    synchronize:true,

  }),UserModule, TouristModule, RollModule, PaymentWayModule, ModelModule, DriverModule, CountryModule, ContractModule, CategoryModule, CarSituationModule, CarModule, BrandModule, AuthModule],
  controllers: [],
  providers: [],

  

})
export class AppModule {}