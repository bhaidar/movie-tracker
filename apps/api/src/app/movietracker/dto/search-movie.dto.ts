import { IsOptional } from 'class-validator';

export class SearchMovieDto {
  @IsOptional()
  term?: string;
}
