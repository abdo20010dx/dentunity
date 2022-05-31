import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateToolFormDto } from './dto/create-tool_form.dto';
import { UpdateToolFormDto } from './dto/update-tool_form.dto';
import { ToolForm } from './entities/tool_form.entity';


import { Repository } from 'typeorm'
@Injectable()
export class ToolFormService {

  constructor(@InjectRepository(ToolForm) private repo: Repository<ToolForm>) { }

  create(createToolFormDto: CreateToolFormDto) {
    let patientForm = this.repo.create(createToolFormDto)
    return this.repo.save(patientForm)
  }

  findAll(findToolFormDto: UpdateToolFormDto) {
    return this.repo.find({ relations: ['user'] })
  }

  findOne(id: number) {
    return this.repo.findOne(id, { relations: ['user'] })
  }

  update(id: number, userId, updateToolFormDto: UpdateToolFormDto) {
    return this.repo.update({ id, userId }, updateToolFormDto)
  }

  remove(id: number, userId: number) {
    return this.repo.delete({ id, userId })
  }
}
