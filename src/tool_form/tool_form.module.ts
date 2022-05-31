import { Module } from '@nestjs/common';
import { ToolFormService } from './tool_form.service';
import { ToolFormController } from './tool_form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolForm } from './entities/tool_form.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToolForm])],
  controllers: [ToolFormController],
  providers: [ToolFormService]
})
export class ToolFormModule { }
