import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExerciseDto {
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

  @IsNotEmpty()
  @IsNumber()
  workoutId: number;
}
