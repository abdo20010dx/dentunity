import { Test, TestingModule } from '@nestjs/testing';
import { ToolFormController } from './tool_form.controller';
import { ToolFormService } from './tool_form.service';

describe('ToolFormController', () => {
  let controller: ToolFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToolFormController],
      providers: [ToolFormService],
    }).compile();

    controller = module.get<ToolFormController>(ToolFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
