import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { WorkoutModule } from './workout/workout.module';
import { DietModule } from './diet/diet.module';
import { MeasurementsModule } from './measurements/measurements.module';

import { Workout } from './workout/entities/workout.entity';
import { ExercisesModule } from './exercices/exercises.module';
import { Exercise } from './exercices/entities/exercise.entity';
import { Diet } from './diet/entities/diet.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          url: configService.get<string>('DB_CONNECTION'),
          entities: [User, Workout, Exercise, Diet],
          synchronize: true,
          ssl: { rejectUnauthorized: false },
        };
      },
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    WorkoutModule,
    DietModule,
    MeasurementsModule,
    ExercisesModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
