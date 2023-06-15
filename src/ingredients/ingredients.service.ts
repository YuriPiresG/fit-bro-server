import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { DietService } from 'src/diet/diet.service';
import { Diet } from 'src/diet/entities/diet.entity';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
    private dietService: DietService,
  ) {}
  async create(createIngredientDto: CreateIngredientDto) {
    const ingredientCreated = this.ingredientRepository.create();
    ingredientCreated.name = createIngredientDto.name;
    ingredientCreated.calories = createIngredientDto.calories;
    ingredientCreated.protein = createIngredientDto.protein;
    ingredientCreated.carbs = createIngredientDto.carbs;
    ingredientCreated.diet = { id: createIngredientDto.dietId } as Diet;
    return this.ingredientRepository.save(ingredientCreated);
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
