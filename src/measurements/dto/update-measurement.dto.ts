import { PartialType } from '@nestjs/mapped-types';
import { CreateMeasurementDto } from './create-measurement.dto';
import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateMeasurementDto extends PartialType(CreateMeasurementDto) {
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsNumber()
  @IsNotEmpty()
  bodyFat: number;

  @IsNumber()
  @IsNotEmpty()
  biceps: number;

  @IsNumber()
  @IsNotEmpty()
  triceps: number;

  @IsNumber()
  @IsNotEmpty()
  forearm: number;

  @IsNumber()
  @IsNotEmpty()
  chest: number;

  @IsNumber()
  @IsNotEmpty()
  waist: number;

  @IsNumber()
  @IsNotEmpty()
  hips: number;

  @IsNumber()
  @IsNotEmpty()
  thigh: number;

  @IsNumber()
  @IsNotEmpty()
  calf: number;

  @IsNumber()
  @IsNotEmpty()
  back: number;

  @IsNumber()
  @IsNotEmpty()
  shoulder: number;
}
