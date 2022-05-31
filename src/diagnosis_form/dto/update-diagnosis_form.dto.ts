import { PartialType } from '@nestjs/swagger';
import { CreateDiagnosisFormDto } from './create-diagnosis_form.dto';

export class UpdateDiagnosisFormDto extends PartialType(CreateDiagnosisFormDto) {}
