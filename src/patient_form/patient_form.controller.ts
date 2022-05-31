import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req } from '@nestjs/common';
import { PatientFormService } from './patient_form.service';
import { CreatePatientFormDto } from './dto/create-patient_form.dto';
import { UpdatePatientFormDto } from './dto/update-patient_form.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('patient-form')
@Controller('patient-form')
export class PatientFormController {
  constructor(private readonly patientFormService: PatientFormService) { }

  @Post()
  create(@Body() createPatientFormDto: CreatePatientFormDto, @Req() req: any) {
    createPatientFormDto.userId = req.user.id

    return this.patientFormService.create(createPatientFormDto);
  }

  @Get()
  findAll(@Query() updatePatientFormDto: UpdatePatientFormDto) {
    return this.patientFormService.findAll(updatePatientFormDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientFormService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientFormDto: UpdatePatientFormDto, @Req() req: any) {
    delete updatePatientFormDto.userId
    return this.patientFormService.update(+id, req.user.id, updatePatientFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    return this.patientFormService.remove(+id, req.user.id);
  }
}
