import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercice {
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
}
