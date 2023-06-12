import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workout } from './entities/workout.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { Exercise } from 'src/exercices/entities/exercise.entity';
import { User } from 'src/users/entities/user.entity';

interface FindOneOptions {
  id?: number;
  name?: string;
}

@Injectable()
export class WorkoutService {
  constructor(
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
    workoutCreated.exercises = createWorkoutDto.exercisesId.map(
      (id) =>
        ({
          id: id,
        } as Exercise),
    );
    return await this.workoutRepository.save(workoutCreated);
  }

  findAll() {
    return this.workoutRepository.find({
      relations: ['user', 'exercises'],
    });
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
    const workoutUpdated = this.workoutRepository.create();
    workoutUpdated.name = updateWorkoutDto.name;
    workoutUpdated.description = updateWorkoutDto.description;
    workoutUpdated.user = { id: updateWorkoutDto.userId } as User;
    workoutUpdated.exercises = updateWorkoutDto.exercisesId.map(
      (id) =>
        ({
          id: id,
        } as Exercise),
    );
    return await this.workoutRepository.save(workoutUpdated);
  }

  remove(id: number) {
    return this.workoutRepository.delete(id);
  }
}
