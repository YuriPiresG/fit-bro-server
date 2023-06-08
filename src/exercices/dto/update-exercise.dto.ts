import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseDto } from './create-exercise.dto';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  repetitions: number;

  @IsNotEmpty()
  @IsNumber()
  series: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;
}
