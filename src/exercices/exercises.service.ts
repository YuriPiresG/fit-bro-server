import { Injectable } from '@nestjs/common';
import { CreateExerciceDto } from './dto/create-exercise.dto';
import { UpdateExerciceDto } from './dto/update-exercise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercice } from './entities/exercise.entity';

@Injectable()
export class exercisesService {
  constructor(
    @InjectRepository(Exercice)
    private exercisesRepository: Repository<Exercice>,
  ) {}
  create(createExerciceDto: CreateExerciceDto) {
    return this.exercisesRepository.save(createExerciceDto);
  }

  findAll() {
    return this.exercisesRepository.find();
  }

  findOne(id: number) {
    return this.exercisesRepository.findOne({ where: { id } });
  }

  update(id: number, updateExerciceDto: UpdateExerciceDto) {
    const exerciseUpdated = this.exercisesRepository.save({
      id,
      ...updateExerciceDto,
    });
    return exerciseUpdated;
  }

  remove(id: number) {
    return this.exercisesRepository.delete(id);
  }
}
