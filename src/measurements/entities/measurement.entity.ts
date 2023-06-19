import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Measurement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.measurements)
  user: User;

  @Column()
  date: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  bodyFat: number;

  @Column()
  bicepsL: number;

  @Column()
  bicepsR: number;

  @Column()
  tricepsL: number;

  @Column()
  tricepsR: number;

  @Column()
  forearmL: number;

  @Column()
  forearmR: number;

  @Column()
  chest: number;

  @Column()
  waist: number;

  @Column()
  hips: number;

  @Column()
  thighL: number;

  @Column()
  thighR: number;

  @Column()
  calfL: number;

  @Column()
  calfR: number;

  @Column()
  back: number;

  @Column()
  shoulderL: number;

  @Column()
  shoulderR: number;
}
