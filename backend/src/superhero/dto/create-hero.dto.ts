import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateHeroDto {
  @IsString()
  @IsNotEmpty()
  alias: string;

  @IsString()
  @IsNotEmpty()
  specialAbility: string;

  @IsNumber()
  @Min(1)
  @Max(10)
  modestRating: number;
} 