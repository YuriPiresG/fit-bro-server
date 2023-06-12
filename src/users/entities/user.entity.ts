import { Workout } from 'src/workout/entities/workout.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Measurement } from '../../measurements/entities/measurement.entity';
import { Diet } from 'src/diet/entities/diet.entity';
import { Exercise } from 'src/exercices/entities/exercise.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @OneToMany(() => Workout, (workout) => workout.user)
  workouts: Workout[];

  @OneToMany(() => Exercise, (exercises) => exercises.user)
  exercises: Exercise[];

  @OneToMany(() => Measurement, (measurement) => measurement.user)
  measurements: Measurement[];

  @OneToMany(() => Diet, (diet) => diet.user)
  diets: Diet[];
}
