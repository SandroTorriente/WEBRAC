import {
    Column,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Roll } from "src/roll/entities/roll.entity";
  import { request } from "src/request/entities";
  
  @Entity()
  export class user {
    @PrimaryGeneratedColumn("increment")
    id: string;
  
    /*@Column({ unique: true, nullable: false })
    email: string;*/
  
    @Column({ nullable: false })
    password: string;

    @Column({ length: 500 })
    user_name: string;
  
    /* @DeleteDateColumn() 
      deletedAt: Date; */
  
    @ManyToOne(() => Roll, (user_roll) => user_roll.users, { cascade: true })
    @JoinColumn({ name: "roll_code" })
    roll: Roll;

    @Column({ unique: true, nullable: false })
    email: string;
  
    @OneToMany(() => request, request => request.user)
    requests: request[];
  }