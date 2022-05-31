import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req } from '@nestjs/common';
import { ToolFormService } from './tool_form.service';
import { CreateToolFormDto } from './dto/create-tool_form.dto';
import { UpdateToolFormDto } from './dto/update-tool_form.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('tool-form')
@Controller('tool-form')
export class ToolFormController {
  constructor(private readonly toolFormService: ToolFormService) { }

  @Post()
  create(@Body() createToolFormDto: CreateToolFormDto, @Req() req: any) {
    createToolFormDto.userId = req.user.id
    return this.toolFormService.create(createToolFormDto);
  }

  @Get()
  findAll(@Query() findToolFormDto: UpdateToolFormDto) {
    return this.toolFormService.findAll(findToolFormDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toolFormService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToolFormDto: UpdateToolFormDto, @Req() req: any) {
    delete updateToolFormDto.userId
    return this.toolFormService.update(+id, req.user.id, updateToolFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    return this.toolFormService.remove(+id, req.user.id);
  }
}
