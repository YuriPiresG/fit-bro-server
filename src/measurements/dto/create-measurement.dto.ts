import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateMeasurementDto {
  @IsDate()
  @IsNotEmpty()
  date: Date;

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
  bicepsL: number;

  @IsNumber()
  @IsNotEmpty()
  bicepsR: number;

  @IsNumber()
  @IsNotEmpty()
  tricepsL: number;

  @IsNumber()
  @IsNotEmpty()
  tricepsR: number;

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
  shoulderL: number;

  @IsNumber()
  @IsNotEmpty()
  shoulderR: number;
}
