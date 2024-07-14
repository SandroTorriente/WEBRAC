import { Model } from "src/model/entities/model.entity";
import { Entity, JoinColumn, Unique } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";

@Entity()
@Unique(['lisenceplace'])
export class Car {
    @Column()
    lisenceplace: string;

    @ManyToOne(() => Model, (Model) => Model.car, {cascade: true})
    @JoinColumn ({ name: 'car_situation' })
    model: string;

    @Column()
    lisenceplace: string;

    @Column()
    lisenceplace: string;

    @Column()
    lisenceplace: string;
    
    @Column()
    lisenceplace: string;

    @Column()
    lisenceplace: string;

    @Column()
    lisenceplace: string;
}

