import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
import { Repository } from 'typeorm';


@Injectable()
export class DoctorsService {

  constructor(@InjectRepository(Doctor) private repo: Repository<Doctor>) { }
  create(createDoctorDto: CreateDoctorDto) {
    let doctor = this.repo.create(createDoctorDto)
    return this.repo.save(doctor)

  }

  async findAll() {
    let doctor = await this.repo.find({ relations: ['user'] })
    doctor.forEach(function (v) { delete v.user.password });
    return doctor
  }

  async findOne(id: number) {
    let doctor = await this.repo.findOne({ userId: id }, { relations: ['user'] })
    // console.log(doctor);
    delete doctor.user.password

    if (!doctor) throw new NotFoundException('not Found doctor')
    return doctor
  }

  update(id: number, updateDoctorDto: UpdateDoctorDto) {
    return this.repo.update({ userId: id }, updateDoctorDto)

  }

  remove(id: number) {
    return `This action removes a #${id} doctor`;
  }
}
