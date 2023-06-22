import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDietDto } from './dto/create-diet.dto';
import { UpdateDietDto } from './dto/update-diet.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diet } from './entities/diet.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

interface FindOneOptions {
  id?: number;
  name?: string;
}

@Injectable()
export class DietService {
  constructor(
    @InjectRepository(Diet)
    private dietRepository: Repository<Diet>,
    private usersService: UsersService,
  ) {}
  async create(createDietDto: CreateDietDto) {
    const userFound = await this.usersService.findOne({
      id: createDietDto.userId,
    });
    if (!userFound || createDietDto.userId !== userFound.id) {
      throw new Error('Usuário não encontrado!');
    }
    const dietCreated = this.dietRepository.create();
    dietCreated.name = createDietDto.name;
    dietCreated.guide = createDietDto.guide;
    dietCreated.user = { id: createDietDto.userId } as User;
    return this.dietRepository.save(dietCreated);
  }

  findAll() {
    return this.dietRepository
      .createQueryBuilder('diet')
      .leftJoin('diet.user', 'user')
      .select(['diet', 'user.id', 'user.username'])
      .getMany();
  }

  async findOne({ id, name }: FindOneOptions): Promise<Diet> {
    const dietValue = await this.dietRepository.findOne({
      where: { id, name },
    });
    if (dietValue === null) {
      throw new NotFoundException('Receita não encontrada!');
    }
    return dietValue;
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
