import { Injectable } from '@nestjs/common';
import { CreateDietDto } from './dto/create-diet.dto';
import { UpdateDietDto } from './dto/update-diet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diet } from './entities/diet.entity';

@Injectable()
export class DietService {
  constructor(
    @InjectRepository(Diet)
    private dietRepository: Repository<Diet>,
  ) {}
  create(createDietDto: CreateDietDto) {
    return this.dietRepository.save(createDietDto);
  }

  findAll() {
    return this.dietRepository.find();
  }

  findOne(id: number) {
    return this.dietRepository.findOne({ where: { id } });
  }

  update(id: number, updateDietDto: UpdateDietDto) {
    return this.dietRepository.save({
      id,
      ...updateDietDto,
    });
  }

  remove(id: number) {
    return this.dietRepository.delete({ id });
  }
}
