import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Diet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  guide: string;
}
