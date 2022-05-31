
import { DiagnosisForm } from "src/diagnosis_form/entities/diagnosis_form.entity";
import { ToolForm } from "src/tool_form/entities/tool_form.entity";
import { User } from "src/users/entities/user.entity";
import { OneToMany, Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    userId: number

    @OneToOne(type => User)
    @JoinColumn({ name: "userId", referencedColumnName: "id" })
    user: User;

    @Column({ default: '2022' })
    grade: string

    @Column({ default: 'usercode' })
    code: string


    // @OneToMany(type => ToolForm, toolForm => toolForm.doctor)
    // toolForms: ToolForm[];

    // @OneToMany(type => DiagnosisForm, diagnosisForm => diagnosisForm.doctor)
    // diagnosisForms: DiagnosisForm[];


}

// @JoinTable({
//     name: 'user',
//     joinColumn: {
//         name: 'userId',
//         referencedColumnName: 'id'
//     }
// })
