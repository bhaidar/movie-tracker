import {
  IsNotEmpty,
  IsDateString,
  IsString,
  IsNumber,
  IsOptional
} from 'class-validator';

export class AddMovieDto {
  @IsNotEmpty()
  title: string;

  @IsDateString()
  @IsNotEmpty()
  watchedOn: Date;

  @IsString()
  @IsOptional()
  genre?: string;

  @IsNumber()
  @IsOptional()
  rating?: number;
}
