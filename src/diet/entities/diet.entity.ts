import { Ingredient } from 'src/ingredients/entities/ingredient.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Diet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  guide: string;

  @OneToMany(() => Ingredient, (ingredients) => ingredients.diet)
  ingredients: Ingredient[];

  @ManyToOne(() => User, (user) => user.diets)
  user: User;
}
