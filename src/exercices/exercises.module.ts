import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { exercisesController } from './exercises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './entities/exercise.entity';
import { WorkoutModule } from 'src/workout/workout.module';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise]), WorkoutModule],
  controllers: [exercisesController],
  providers: [ExercisesService],
  exports: [ExercisesService],
})
export class ExercisesModule {}
