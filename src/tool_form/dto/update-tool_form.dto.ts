import { PartialType } from '@nestjs/swagger';
import { CreateToolFormDto } from './create-tool_form.dto';

export class UpdateToolFormDto extends PartialType(CreateToolFormDto) {}
