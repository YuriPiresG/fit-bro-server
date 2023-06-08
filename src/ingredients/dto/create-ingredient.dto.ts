import { IsString, IsNumber } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  name: string;

  @IsNumber()
  calories: number;

  @IsNumber()
  protein: number;

  @IsNumber()
  carbs: number;
}
