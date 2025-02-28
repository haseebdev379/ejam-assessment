import { 
  Controller, 
  Get, 
  Post, 
  Body,
  UsePipes, 
  ValidationPipe, 
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { HeroRegistryService } from './superhero.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { HeroProfile } from './superhero.model';

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

@Controller('heroes')
export class HeroRegistryController {
  constructor(private readonly heroRegistryService: HeroRegistryService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe())
  createHero(@Body() heroData: CreateHeroDto): ApiResponse<HeroProfile> {
    const hero = this.heroRegistryService.createHeroProfile(heroData);
    return {
      status: HttpStatus.CREATED,
      message: 'Hero created successfully',
      data: hero
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  fetchAllHeroes(): ApiResponse<HeroProfile[]> {
    const heroes = this.heroRegistryService.getAllHeroes();
    return {
      status: HttpStatus.OK,
      message: 'Heroes retrieved successfully',
      data: heroes
    };
  }


} 