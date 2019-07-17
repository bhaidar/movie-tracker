import {
  IsNotEmpty,
  IsDateString,
  IsString,
  IsNumber,
  IsOptional,
  IsDate
} from 'class-validator';
import { Type } from 'class-transformer';

export class AddMovieDto {
  @IsNotEmpty()
  title: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  watchedOn: Date;

  @IsString()
  @IsOptional()
  genre?: string;

  @IsNumber()
  @IsOptional()
  rating?: number;
}
