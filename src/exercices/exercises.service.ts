import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
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
    @Inject(forwardRef(() => WorkoutService))
    private workoutService: WorkoutService,
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
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
    const exerciseValue = await this.exercisesRepository.findOne({
      where: { id, name },
    });
    if (exerciseValue === null) {
      throw new NotFoundException('Exercício não encontrado!');
    }
    return exerciseValue;
  }

  async findByWorkoutId(exerciseId: number) {
    return this.exercisesRepository.find({
      where: { workout: { id: exerciseId } },
    });
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return this.exercisesRepository.save({ ...updateExerciseDto, id });
  }

  remove(id: number) {
    return this.exercisesRepository.delete(id);
  }
}
