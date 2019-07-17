import { MovieEntity } from './entity/movie.entity';
import { MovieDto } from './dto/movie.dto';

export const toMovieDto = (data: MovieEntity): MovieDto => {
  const { id, title, watchedOn, genre, rating } = data;

  const movieDto: MovieDto = {
    id,
    title,
    watchedOn,
    genre,
    rating
  };

  return movieDto;
};
