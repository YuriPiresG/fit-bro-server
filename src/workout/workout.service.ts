import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private workoutRepository: Repository<Workout>,
  ) {}
  create(createWorkoutDto: CreateWorkoutDto) {
    return this.workoutRepository.save(createWorkoutDto);
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
