

import { User } from "src/users/entities/user.entity";
import { ManyToOne, OneToMany, Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
@Entity()
export class ToolForm {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    userId: number

    @ManyToOne(type => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: User

}
