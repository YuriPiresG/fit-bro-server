import { Injectable } from '@nestjs/common';
import { CreateMeasurementDto } from './dto/create-measurement.dto';
import { UpdateMeasurementDto } from './dto/update-measurement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Measurement } from './entities/measurement.entity';

@Injectable()
export class MeasurementsService {
  constructor(
    @InjectRepository(Measurement)
    private measurementRepository: Repository<Measurement>,
  ) {}
  create(createMeasurementDto: CreateMeasurementDto) {
    return this.measurementRepository.save(createMeasurementDto);
  }

  findAll() {
    return this.measurementRepository.find();
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
