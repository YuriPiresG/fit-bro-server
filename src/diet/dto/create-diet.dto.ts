import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDietDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  guide: string;
}
