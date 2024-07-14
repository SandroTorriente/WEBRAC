import { Car } from "src/car/entities/car.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['situation'])
export class car_situation{
    @Column()
    situation_code:string

    @Column()
    situation:string

    @OneToMany(()=> Car, Car => Car)
    Car:Car[];
}