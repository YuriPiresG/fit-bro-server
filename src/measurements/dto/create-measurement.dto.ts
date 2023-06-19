import { IsDateString, IsNotEmpty, IsNumber, Matches } from 'class-validator';
export class CreateMeasurementDto {
  @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)
  @IsDateString()
  date: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

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
  armL: number;

  @IsNumber()
  @IsNotEmpty()
  armR: number;

  @IsNumber()
  @IsNotEmpty()
  forearmL: number;

  @IsNumber()
  @IsNotEmpty()
  forearmR: number;

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
  thighL: number;

  @IsNumber()
  @IsNotEmpty()
  thighR: number;

  @IsNumber()
  @IsNotEmpty()
  calfL: number;

  @IsNumber()
  @IsNotEmpty()
  calfR: number;

  @IsNumber()
  @IsNotEmpty()
  back: number;

  @IsNumber()
  @IsNotEmpty()
  shoulders: number;
}
