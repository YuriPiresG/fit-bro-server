import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './entities/exercise.entity';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
  ) {}
  create(createExerciseDto: CreateExerciseDto) {
    return this.exercisesRepository.save(createExerciseDto);
  }

  findAll() {
    return this.exercisesRepository.find();
  }

  findOne(id: number) {
    return this.exercisesRepository.findOne({ where: { id } });
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    const exerciseUpdated = this.exercisesRepository.save({
      id,
      ...updateExerciseDto,
    });
    return exerciseUpdated;
  }

  remove(id: number) {
    return this.exercisesRepository.delete(id);
  }
}
