

import { PatientForm } from "src/patient_form/entities/patient_form.entity";
import { User } from "src/users/entities/user.entity";
import { ManyToOne, OneToMany, Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
@Entity()
export class DiagnosisForm {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    description: string

    @Column()
    userId: number


    @Column()
    patientFormId: number

    @ManyToOne(type => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: User

    @OneToOne(type => PatientForm)
    @JoinColumn({ name: "patientFormId", referencedColumnName: "id" })
    patientForm: PatientForm;


}
