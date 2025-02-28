import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createSuperhero(@Body() createSuperheroDto: CreateSuperheroDto): { message: string } {
    return this.superheroesService.createSuperhero(createSuperheroDto);
  }

  @Get()
  getSuperheroes(): CreateSuperheroDto[] { 
    return this.superheroesService.getSuperheroes();
  }
}
