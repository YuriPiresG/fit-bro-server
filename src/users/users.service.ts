import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

interface FindOneOptions {
  id?: number;
  username?: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const userWithSameEmail = await this.usersRepository.findOneBy({
      email: createUserDto.email,
    });

    if (userWithSameEmail !== null) {
      throw new ConflictException('Email já cadastrado');
    }
    const hashPass = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashPass;
    return await this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne({ id, username }: FindOneOptions): Promise<User> {
    const userValue = await this.usersRepository.findOne({
      where: { id, username },
    });
    if (userValue === null) {
      throw new NotFoundException('Usuário ou senha incorretos');
    }
    return userValue;
  }
  async findByUsername(username: string): Promise<User> {
    return this.findOne({ username });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hashPass = await bcrypt.hash(updateUserDto.password, 10);
    updateUserDto.password = hashPass;
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
