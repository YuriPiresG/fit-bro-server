import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Measurement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.measurements)
  user: User;

  @Column()
  date: Date;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  bodyFat: number;

  @Column()
  biceps: number;

  @Column()
  triceps: number;

  @Column()
  forearm: number;

  @Column()
  chest: number;

  @Column()
  waist: number;

  @Column()
  hips: number;

  @Column()
  thigh: number;

  @Column()
  calf: number;

  @Column()
  back: number;

  @Column()
  shoulder: number;
}
