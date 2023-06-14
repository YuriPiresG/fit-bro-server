import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDietDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  guide: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
