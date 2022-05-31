
import { User } from "src/users/entities/user.entity";
import { ManyToOne, OneToMany, Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
@Entity()
export class PatientForm {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    userId: number

    @ManyToOne(type => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: User

    @Column()
    Q1: boolean

    @Column()
    Q2: boolean

    @Column()
    Q3: boolean

    @Column()
    Q4: boolean

    @Column()
    Q5: boolean



}
