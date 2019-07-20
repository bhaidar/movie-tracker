import { MovieTrackerService } from './movietracker.service';
import {
  Get,
  Post,
  Req,
  Param,
  Body,
  Controller,
  Put,
  Query,
  HttpCode,
  Delete,
  ParseUUIDPipe
} from '@nestjs/common';
import { MovieListDto } from './dto/movie.list.dto';
import { AddMovieDto } from './dto/movie.create.dto';
import { MovieDto } from './dto/movie.dto';
import { SearchMovieDto } from './dto/search-movie.dto';

@Controller('api/movietracker')
export class MovieTrackerController {
  constructor(private readonly movieTrackerService: MovieTrackerService) {}

  @Get()
  async findAll(@Query() query: SearchMovieDto): Promise<MovieListDto> {
    const movies = await this.movieTrackerService.searchMovies(
      query.term || ''
    );
    return { movies };
  }

  @Post()
  async create(
    @Body() addMovieDto: AddMovieDto,
    @Req() req: any
  ): Promise<MovieDto> {
    return await this.movieTrackerService.addMovie(addMovieDto);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() movieDto: MovieDto
  ): Promise<MovieDto> {
    return await this.movieTrackerService.updateMovie(id, movieDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async destory(
    @Param('id', new ParseUUIDPipe()) id: string
  ): Promise<MovieDto> {
    return await this.movieTrackerService.destoryMovie(id);
  }
}
