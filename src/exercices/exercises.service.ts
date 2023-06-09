import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './entities/exercise.entity';
import { WorkoutService } from 'src/workout/workout.service';

interface FindOneOptions {
  id?: number;
  name?: string;
}

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
    private workoutService: WorkoutService,
  ) {}
  async create(createExerciseDto: CreateExerciseDto) {
    const workoutFound = await this.workoutService.findOne({
      id: createExerciseDto.workoutId,
    });
    if (!workoutFound || createExerciseDto.workoutId !== workoutFound.id) {
      throw new Error('Treino não encontrado!');
    }

    return await this.exercisesRepository.save({
      ...createExerciseDto,
      workout: { id: createExerciseDto.workoutId },
    });
  }

  findAll() {
    return this.exercisesRepository.find();
  }

  async findOne({ id, name }: FindOneOptions): Promise<Exercise> {
    const workoutValue = await this.exercisesRepository.findOne({
      where: { id, name },
    });
    if (workoutValue === null) {
      throw new NotFoundException('Exercício não encontrado!');
    }
    return workoutValue;
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
