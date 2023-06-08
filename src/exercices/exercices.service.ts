import { Injectable } from '@nestjs/common';
import { CreateExerciceDto } from './dto/create-exercice.dto';
import { UpdateExerciceDto } from './dto/update-exercice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercice } from './entities/exercice.entity';

@Injectable()
export class ExercicesService {
  constructor(
    @InjectRepository(Exercice)
    private exercicesRepository: Repository<Exercice>,
  ) {}
  create(createExerciceDto: CreateExerciceDto) {
    return this.exercicesRepository.save(createExerciceDto);
  }

  findAll() {
    return this.exercicesRepository.find();
  }

  findOne(id: number) {
    return this.exercicesRepository.findOne({ where: { id } });
  }

  update(id: number, updateExerciceDto: UpdateExerciceDto) {
    const exerciseUpdated = this.exercicesRepository.save({
      id,
      ...updateExerciceDto,
    });
    return exerciseUpdated;
  }

  remove(id: number) {
    return this.exercicesRepository.delete(id);
  }
}
