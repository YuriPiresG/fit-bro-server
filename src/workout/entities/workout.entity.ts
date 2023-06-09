import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Unique,
} from 'typeorm';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Unique(['name'])
  @Column()
  name: string;

  @Column()
  description?: string;

  @ManyToOne(() => User, (user) => user.workouts)
  user: User;
}
