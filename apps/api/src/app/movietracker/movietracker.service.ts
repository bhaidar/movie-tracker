import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MovieEntity } from './entity/movie.entity';
import { Repository } from 'typeorm';
import { Like } from 'typeorm';

import { MovieDto } from './dto/movie.dto';
import { toMovieDto } from './mapper';
import { AddMovieDto } from './dto/movie.create.dto';

@Injectable()
export class MovieTrackerService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieTrackerRepo: Repository<MovieEntity>
  ) {}

  async searchMovies(term: string): Promise<MovieDto[]> {
    const movies = await this.movieTrackerRepo.find({
      where: `genre ILIKE '%${term}%' or title ILIKE '%${term}%'`
    });
    return movies.map(movie => toMovieDto(movie));
  }

  async addMovie(addMovieDto: AddMovieDto): Promise<MovieDto> {
    const { title, watchedOn, genre, rating } = addMovieDto;

    const movie: MovieEntity = await this.movieTrackerRepo.create({
      title,
      watchedOn,
      genre,
      rating
    });

    await this.movieTrackerRepo.save(movie);

    return toMovieDto(movie);
  }

  async updateMovie(id: string, movieDto: MovieDto): Promise<MovieDto> {
    const { title, watchedOn, genre, rating } = movieDto;

    let movie: MovieEntity = await this.movieTrackerRepo.findOne({
      where: { id }
    });

    if (!movie) {
      throw new HttpException(`Movie doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    movie = {
      id,
      title,
      watchedOn,
      genre,
      rating
    };

    await this.movieTrackerRepo.update({ id }, movie); // update

    return toMovieDto(movie);
  }

  async destoryMovie(id: string): Promise<MovieDto> {
    const movie: MovieEntity = await this.movieTrackerRepo.findOne({
      where: { id }
    });

    if (!movie) {
      throw new HttpException(`Movie doesn't exist`, HttpStatus.BAD_REQUEST);
    }

    await this.movieTrackerRepo.delete({ id });

    return toMovieDto(movie);
  }
}
