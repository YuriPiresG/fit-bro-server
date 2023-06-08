import { Module } from '@nestjs/common';
import { DietService } from './diet.service';
import { DietController } from './diet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diet } from './entities/diet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Diet])],
  controllers: [DietController],
  providers: [DietService],
  exports: [DietService],
})
export class DietModule {}
