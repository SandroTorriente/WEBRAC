import { Model } from "src/model/entities/model.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['brand_name'])
export class brand{
    @Column()
    brand_name:string

    @Column()
    brand_code:string

    @OneToMany(()=> Model, Model => Model)
    Model:Model[];
}