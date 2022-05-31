import { Test, TestingModule } from '@nestjs/testing';
import { ToolFormService } from './tool_form.service';

describe('ToolFormService', () => {
  let service: ToolFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToolFormService],
    }).compile();

    service = module.get<ToolFormService>(ToolFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
