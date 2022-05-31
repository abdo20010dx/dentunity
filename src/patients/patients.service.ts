import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {

  constructor(@InjectRepository(Patient) private repo: Repository<Patient>) { }

  create(createPatientDto: CreatePatientDto) {
    let patient = this.repo.create(createPatientDto)
    return this.repo.save(patient)
  }

  async findAll() {
    let patient = await this.repo.find({ relations: ['user'] })
    patient.forEach(function (v) { delete v.user.password });
    return patient


  }

  async findOne(id: number) {
    let patient = await this.repo.findOne({ userId: id }, { relations: ['user'] })
    // console.log(patient);
    delete patient.user.password

    if (!patient) throw new NotFoundException('not Found patient')
    return patient
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
