import {
  IsNotEmpty,
  IsDateString,
  IsString,
  IsOptional,
  IsNumber
} from 'class-validator';

export class MovieDto {
  @IsNotEmpty()
  id: string;

  @IsOptional()
  title: string;

  @IsDateString()
  @IsOptional()
  watchedOn: Date;

  @IsString()
  @IsOptional()
  genre?: string;

  @IsNumber()
  @IsOptional()
  rating?: number;
}
