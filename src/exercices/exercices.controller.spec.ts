import { Test, TestingModule } from '@nestjs/testing';
import { exercisesController } from './exercises.controller';
import { exercisesService } from './exercises.service';

describe('exercisesController', () => {
  let controller: exercisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [exercisesController],
      providers: [exercisesService],
    }).compile();

    controller = module.get<exercisesController>(exercisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
