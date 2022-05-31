import { Test, TestingModule } from '@nestjs/testing';
import { PatientFormController } from './patient_form.controller';
import { PatientFormService } from './patient_form.service';

describe('PatientFormController', () => {
  let controller: PatientFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientFormController],
      providers: [PatientFormService],
    }).compile();

    controller = module.get<PatientFormController>(PatientFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
