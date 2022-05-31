import { Module } from '@nestjs/common';
import { PatientFormService } from './patient_form.service';
import { PatientFormController } from './patient_form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientForm } from './entities/patient_form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PatientForm])],
  controllers: [PatientFormController],
  providers: [PatientFormService]
})
export class PatientFormModule { }
