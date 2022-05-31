import { Module } from '@nestjs/common';
import { DiagnosisFormService } from './diagnosis_form.service';
import { DiagnosisFormController } from './diagnosis_form.controller';
import { DiagnosisForm } from './entities/diagnosis_form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DiagnosisForm])],
  controllers: [DiagnosisFormController],
  providers: [DiagnosisFormService]
})
export class DiagnosisFormModule { }
