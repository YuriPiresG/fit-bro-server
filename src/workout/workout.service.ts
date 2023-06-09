import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';
import { UsersService } from 'src/users/users.service';

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
    return await this.workoutRepository.save({
      ...createWorkoutDto,
      user: { id: createWorkoutDto.userId },
    });
  }

  findAll() {
    return this.workoutRepository.find();
  }

  findOne(id: number) {
    return this.workoutRepository.findOne({ where: { id } });
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    const workoutUpdated = this.workoutRepository.save({
      id,
      ...updateWorkoutDto,
    });
    return workoutUpdated;
  }

  remove(id: number) {
    return this.workoutRepository.delete(id);
  }
}
