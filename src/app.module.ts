import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { PatientFormModule } from './patient_form/patient_form.module';
import { ToolFormModule } from './tool_form/tool_form.module';
import { DiagnosisFormModule } from './diagnosis_form/diagnosis_form.module';
import { PatientForm } from './patient_form/entities/patient_form.entity';
import { Patient } from './patients/entities/patient.entity';
import { Doctor } from './doctors/entities/doctor.entity';
import { ToolForm } from './tool_form/entities/tool_form.entity';
import { DiagnosisForm } from './diagnosis_form/entities/diagnosis_form.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [User, Patient, Doctor, PatientForm, ToolForm, DiagnosisForm],
      autoLoadEntities: true,
      synchronize: true
    })
    , UsersModule, AuthModule, DoctorsModule, PatientsModule, PatientFormModule, ToolFormModule, DiagnosisFormModule],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard('jwt')
    // },
    AppService],
})
export class AppModule { }
