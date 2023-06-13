import { Module, forwardRef } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workout } from './entities/workout.entity';
import { UsersModule } from 'src/users/users.module';
import { ExercisesModule } from 'src/exercices/exercises.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Workout]),
    UsersModule,
    forwardRef(() => ExercisesModule),
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService],
  exports: [WorkoutService],
})
export class WorkoutModule {}
