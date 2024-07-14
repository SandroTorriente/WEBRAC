
import { Tourist } from "src/tourist/entities/tourist.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['country_name'])
export class country{
    @Column()
    country_name:string

    @Column()
    country_code:string

    @OneToMany(()=> Tourist, Tourist => Tourist)
    Tourist:Tourist[];
}