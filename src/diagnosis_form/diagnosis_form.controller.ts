import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DiagnosisFormService } from './diagnosis_form.service';
import { CreateDiagnosisFormDto } from './dto/create-diagnosis_form.dto';
import { UpdateDiagnosisFormDto } from './dto/update-diagnosis_form.dto';

@ApiTags('diagnosis-form')
@Controller('diagnosis-form')
export class DiagnosisFormController {
  constructor(private readonly diagnosisFormService: DiagnosisFormService) { }

  @Post()
  create(@Body() createDiagnosisFormDto: CreateDiagnosisFormDto, @Req() req: any) {
    createDiagnosisFormDto.userId = req.user.id

    return this.diagnosisFormService.create(createDiagnosisFormDto);
  }

  @Get()
  findAll(@Query() findDiagnosisFormDto: UpdateDiagnosisFormDto) {
    return this.diagnosisFormService.findAll(findDiagnosisFormDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosisFormService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiagnosisFormDto: UpdateDiagnosisFormDto, @Req() req: any) {
    delete updateDiagnosisFormDto.userId
    return this.diagnosisFormService.update(+id, req.user.id, updateDiagnosisFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    return this.diagnosisFormService.remove(+id, req.user.id);
  }
}
