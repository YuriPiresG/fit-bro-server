import { Module } from '@nestjs/common';
import { DietService } from './diet.service';
import { DietController } from './diet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diet } from './entities/diet.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Diet]), UsersModule],
  controllers: [DietController],
  providers: [DietService],
  exports: [DietService],
})
export class DietModule {}
