import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  calories: number;

  @IsNumber()
  @IsNotEmpty()
  protein: number;

  @IsNumber()
  @IsNotEmpty()
  carbs: number;

  @IsNumber()
  @IsNotEmpty()
  dietId: number;
}
