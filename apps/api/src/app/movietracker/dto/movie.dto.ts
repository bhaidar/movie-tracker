import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsDate
} from 'class-validator';
import { Type } from 'class-transformer';

export class MovieDto {
  @IsNotEmpty()
  id: string;

  @IsOptional()
  title: string;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  watchedOn: Date;

  @IsString()
  @IsOptional()
  genre?: string;

  @IsNumber()
  @IsOptional()
  rating?: number;
}
