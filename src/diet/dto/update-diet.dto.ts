import { PartialType } from '@nestjs/mapped-types';
import { CreateDietDto } from './create-diet.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDietDto extends PartialType(CreateDietDto) {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  guide: string;
}
