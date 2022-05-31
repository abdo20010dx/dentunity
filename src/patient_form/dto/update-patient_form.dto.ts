import { PartialType } from '@nestjs/swagger';
import { CreatePatientFormDto } from './create-patient_form.dto';

export class UpdatePatientFormDto extends PartialType(CreatePatientFormDto) {}
