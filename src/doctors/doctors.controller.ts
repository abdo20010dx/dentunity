import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';


@ApiTags('doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) { }

  // @Post()
  // create(@Body() createDoctorDto: CreateDoctorDto) {
  //   return //this.doctorsService.create(createDoctorDto);
  // }

  @Get('/all')
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get('/me')
  findMe(@Req() req: any) {
    return this.doctorsService.findOne(+req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(+id);
  }

  @Patch()
  update(@Body() updateDoctorDto: UpdateDoctorDto, @Req() req: any) {
    delete updateDoctorDto.userId
    return this.doctorsService.update(+req.user.id, updateDoctorDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.doctorsService.remove(+id);
  // }
}
