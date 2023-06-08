import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateExerciceDto } from './dto/create-exercise.dto';
import { UpdateExerciceDto } from './dto/update-exercise.dto';
import { exercisesService } from './exercises.service';

@Controller('exercises')
export class exercisesController {
  constructor(private readonly exercisesService: exercisesService) {}

  @Post()
  create(@Body() createExerciceDto: CreateExerciceDto) {
    return this.exercisesService.create(createExerciceDto);
  }

  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exercisesService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciceDto: UpdateExerciceDto,
  ) {
    return this.exercisesService.update(+id, updateExerciceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exercisesService.remove(+id);
  }
}
