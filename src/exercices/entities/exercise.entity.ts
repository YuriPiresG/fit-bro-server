import { Workout } from 'src/workout/entities/workout.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  repetitions: number;

  @Column()
  series: number;

  @Column()
  weight: number;

  @ManyToOne(() => Workout, (workout) => workout.exercises)
  workout: Workout;
}
