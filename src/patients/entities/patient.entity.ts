
import { User } from "src/users/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";


@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userId: number

    @OneToOne(type => User)
    @JoinColumn({ name: "userId", referencedColumnName: "id" })
    user: User;
}
