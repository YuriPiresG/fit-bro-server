import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workout } from './entities/workout.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Exercise } from 'src/exercices/entities/exercise.entity';
import { User } from 'src/users/entities/user.entity';
import { ExercisesService } from 'src/exercices/exercises.service';

interface FindOneOptions {
  id?: number;
  name?: string;
}

@Injectable()
export class WorkoutService {
  constructor(
    @Inject(forwardRef(() => ExercisesService))
    private exercisesService: ExercisesService,
    @InjectRepository(Workout)
    private workoutRepository: Repository<Workout>,
    private usersService: UsersService,
  ) {}
  async create(createWorkoutDto: CreateWorkoutDto) {
    const userFound = await this.usersService.findOne({
      id: createWorkoutDto.userId,
    });
    if (!userFound || createWorkoutDto.userId !== userFound.id) {
      throw new Error('Usuário não encontrado!');
    }
    const workoutCreated = this.workoutRepository.create();
    workoutCreated.name = createWorkoutDto.name;
    workoutCreated.description = createWorkoutDto.description;
    workoutCreated.user = { id: createWorkoutDto.userId } as User;
    return await this.workoutRepository.save(workoutCreated);
  }

  findAll() {
    return this.workoutRepository
      .createQueryBuilder('workout')
      .leftJoinAndSelect('workout.user', 'user')
      .leftJoinAndSelect('workout.exercises', 'exercises')
      .select(['workout', 'user.id', 'user.username', 'exercises'])
      .getMany();
  }

  async findOne({ id, name }: FindOneOptions): Promise<Workout> {
    const workoutValue = await this.workoutRepository.findOne({
      where: { id, name },
    });
    if (workoutValue === null) {
      throw new NotFoundException('Treino não encontrado!');
    }
    return workoutValue;
  }

  async findWorkoutsByUserId(userId: number): Promise<Workout[]> {
    return await this.workoutRepository.find({
      where: { user: { id: userId } },
    });
  }

  async update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    const workoutFound = await this.workoutRepository.findOne({
      where: { id },
    });
    if (workoutFound === null) {
      throw new NotFoundException('Treino não encontrado!');
    }
    workoutFound.name = updateWorkoutDto.name;
    workoutFound.description = updateWorkoutDto.description;
    workoutFound.exercises = updateWorkoutDto.exercisesId.map(
      (id) =>
        ({
          id: id,
        } as Exercise),
    );
    return await this.workoutRepository.save(workoutFound);
  }

  async remove(id: number): Promise<any> {
    const workoutFound = await this.workoutRepository.findOne({
      where: { id },
    });

    if (!workoutFound) {
      throw new NotFoundException('Treino não encontrado!');
    }

    const exercisesFound = await this.exercisesService.findByWorkoutId(id);

    for (const exercise of exercisesFound) {
      await this.exercisesService.remove(exercise.id);
    }

    await this.workoutRepository.remove(workoutFound);

    return workoutFound;
  }
}
