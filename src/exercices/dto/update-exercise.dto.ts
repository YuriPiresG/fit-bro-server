import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciceDto } from './create-exercise.dto';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UpdateExerciceDto extends PartialType(CreateExerciceDto) {
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
