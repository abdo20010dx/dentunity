import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePatientFormDto } from './dto/create-patient_form.dto';
import { UpdatePatientFormDto } from './dto/update-patient_form.dto';
import { PatientForm } from './entities/patient_form.entity';
import { Repository } from 'typeorm'

@Injectable()
export class PatientFormService {

  constructor(@InjectRepository(PatientForm) private repo: Repository<PatientForm>) { }

  create(createPatientFormDto: CreatePatientFormDto) {
    let patientForm = this.repo.create(createPatientFormDto)
    return this.repo.save(patientForm)
  }

  findAll(findPatientFormDto: UpdatePatientFormDto) {
    return this.repo.find({ relations: ['user'] })
  }

  findOne(id: number) {
    return this.repo.findOne(id, { relations: ['user'] })
  }

  update(id: number, userId, updatePatientFormDto: UpdatePatientFormDto) {
    return this.repo.update({ id, userId }, updatePatientFormDto)
  }

  remove(id: number, userId: number) {
    return this.repo.delete({ id, userId })
  }
}
