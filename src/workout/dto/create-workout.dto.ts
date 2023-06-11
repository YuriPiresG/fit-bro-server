import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateWorkoutDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description?: string;

  @IsNumber()
  userId: number;

  @IsArray()
  @IsNumber({}, { each: true })
  exercisesId: number[];
}
