import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExerciceDto {
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
