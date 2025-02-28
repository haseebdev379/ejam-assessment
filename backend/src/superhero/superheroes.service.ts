import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './superhero.dto';

@Injectable()
export class SuperheroesService {
  private superheroes: CreateSuperheroDto[] = []; 

  createSuperhero(superheroDto: CreateSuperheroDto) {
    this.superheroes.push(superheroDto);
    return { message: 'Superhero added successfully!' };
  }

  getSuperheroes() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
