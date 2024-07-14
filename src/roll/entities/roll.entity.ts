import { User } from "src/user/entities/user.entity";
import { Unique } from "typeorm/decorator/Unique";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Entity } from "typeorm/decorator/entity/Entity";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";

@Entity()
@Unique(['roll_name'])
export class Roll {
    @PrimaryGeneratedColumn("increment")
    roll_code :string

    @Column()
    roll_name:string

    @OneToMany(()=> User, User => User.roll)
    User:User[];
}
