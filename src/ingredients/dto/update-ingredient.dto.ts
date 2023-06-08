import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientDto } from './create-ingredient.dto';
import { IsString, IsNumber } from 'class-validator';

export class UpdateIngredientDto extends PartialType(CreateIngredientDto) {
  @IsString()
  name: string;

  @IsNumber()
  calories: number;

  @IsNumber()
  protein: number;

  @IsNumber()
  carbs: number;
}
