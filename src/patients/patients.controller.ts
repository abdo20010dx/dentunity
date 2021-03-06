import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('patients')
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) { }

  // @Post()
  // create(@Body() createPatientDto: CreatePatientDto) {
  //   return this.patientsService.create(createPatientDto);
  // }

  @Get('/all')
  findAll() {
    return this.patientsService.findAll();
  }

  @Get('/me')
  findMe(@Req() req: any) {
    return this.patientsService.findOne(+req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
  //   return this.patientsService.update(+id, updatePatientDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.patientsService.remove(+id);
  // }
}
