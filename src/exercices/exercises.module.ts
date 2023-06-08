import { Module } from '@nestjs/common';
import { exercisesService } from './exercises.service';
import { exercisesController } from './exercises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercice } from './entities/exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercice])],
  controllers: [exercisesController],
  providers: [exercisesService],
  exports: [exercisesService],
})
export class exercisesModule {}
