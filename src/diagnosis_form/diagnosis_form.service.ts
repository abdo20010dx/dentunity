import { Injectable } from '@nestjs/common';
import { CreateDiagnosisFormDto } from './dto/create-diagnosis_form.dto';
import { UpdateDiagnosisFormDto } from './dto/update-diagnosis_form.dto';


import { Repository } from 'typeorm'
import { DiagnosisForm } from './entities/diagnosis_form.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class DiagnosisFormService {

  constructor(@InjectRepository(DiagnosisForm) private repo: Repository<DiagnosisForm>) { }

  create(findDiagnosisFormDto: CreateDiagnosisFormDto) {
    let patientForm = this.repo.create(findDiagnosisFormDto)
    return this.repo.save(patientForm)
  }

  findAll(findToolFormDto: UpdateDiagnosisFormDto) {
    return this.repo.find({ relations: ['user'] })
  }

  findOne(id: number) {
    return this.repo.findOne(id, { relations: ['user'] })
  }

  update(id: number, userId, updateDiagnosisFormDto: UpdateDiagnosisFormDto) {
    return this.repo.update({ id, userId }, updateDiagnosisFormDto)
  }

  remove(id: number, userId: number) {
    return this.repo.delete({ id, userId })
  }
}
