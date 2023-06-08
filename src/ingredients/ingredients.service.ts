import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}
  create(createIngredientDto: CreateIngredientDto) {
    return this.ingredientRepository.save(createIngredientDto);
  }

  findAll() {
    return this.ingredientRepository.find();
  }

  findOne(id: number) {
    return this.ingredientRepository.findOne({ where: { id } });
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientRepository.save({
      id,
      ...updateIngredientDto,
    });
  }

  remove(id: number) {
    return this.ingredientRepository.delete(id);
  }
}
