import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosisFormService } from './diagnosis_form.service';

describe('DiagnosisFormService', () => {
  let service: DiagnosisFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagnosisFormService],
    }).compile();

    service = module.get<DiagnosisFormService>(DiagnosisFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
