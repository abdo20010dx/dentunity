import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosisFormController } from './diagnosis_form.controller';
import { DiagnosisFormService } from './diagnosis_form.service';

describe('DiagnosisFormController', () => {
  let controller: DiagnosisFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiagnosisFormController],
      providers: [DiagnosisFormService],
    }).compile();

    controller = module.get<DiagnosisFormController>(DiagnosisFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
