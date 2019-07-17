import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entity/movie.entity';
import { MovieTrackerController } from './movietracker.controller';
import { MovieTrackerService } from './movietracker.service';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  controllers: [MovieTrackerController],
  providers: [MovieTrackerService]
})
export class MovieTrackerModule {}
