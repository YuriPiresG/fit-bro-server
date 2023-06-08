import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutDto } from './create-workout.dto';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateWorkoutDto extends PartialType(CreateWorkoutDto) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description?: string;
}
