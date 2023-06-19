import { Injectable } from '@nestjs/common';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Measurement } from './entities/measurement.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class MeasurementsService {
  constructor(
    @InjectRepository(Measurement)
    private measurementRepository: Repository<Measurement>,
    private usersService: UsersService,
  ) {}
  async create(createMeasurementDto: CreateMeasurementDto) {
    const userFound = await this.usersService.findOne({
      id: createMeasurementDto.userId,
    });
    if (!userFound || createMeasurementDto.userId !== userFound.id) {
      throw new Error('Usuário não encontrado!');
    }
    const measurementCreated = this.measurementRepository.create();
    measurementCreated.date = createMeasurementDto.date;
    measurementCreated.weight = createMeasurementDto.weight;
    measurementCreated.height = createMeasurementDto.height;
    measurementCreated.bodyFat = createMeasurementDto.bodyFat;
    measurementCreated.bicepsL = createMeasurementDto.bicepsL;
    measurementCreated.bicepsR = createMeasurementDto.bicepsR;
    measurementCreated.tricepsL = createMeasurementDto.tricepsL;
    measurementCreated.tricepsR = createMeasurementDto.tricepsR;
    measurementCreated.forearmL = createMeasurementDto.forearmL;
    measurementCreated.forearmR = createMeasurementDto.forearmR;
    measurementCreated.chest = createMeasurementDto.chest;
    measurementCreated.waist = createMeasurementDto.waist;
    measurementCreated.hips = createMeasurementDto.hips;
    measurementCreated.thighL = createMeasurementDto.thighL;
    measurementCreated.thighR = createMeasurementDto.thighR;
    measurementCreated.calfL = createMeasurementDto.calfL;
    measurementCreated.calfR = createMeasurementDto.calfR;
    measurementCreated.back = createMeasurementDto.back;
    measurementCreated.shoulders = createMeasurementDto.shoulders;
    measurementCreated.user = userFound as User;
    return this.measurementRepository.save(measurementCreated);
  }

  findAll() {
    return this.measurementRepository.find({ relations: ['user'] });
  }

  findOne(id: number) {
    return this.measurementRepository.findOne({ where: { id } });
  }

  update(id: number, updateMeasurementDto: UpdateMeasurementDto) {
    return this.measurementRepository.update(id, updateMeasurementDto);
  }

  remove(id: number) {
    return this.measurementRepository.delete(id);
  }
}
