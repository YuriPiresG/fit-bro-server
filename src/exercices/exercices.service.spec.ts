import { Test, TestingModule } from '@nestjs/testing';
import { exercisesService } from './exercises.service';

describe('exercisesService', () => {
  let service: exercisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [exercisesService],
    }).compile();

    service = module.get<exercisesService>(exercisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
