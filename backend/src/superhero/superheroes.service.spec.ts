import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
  });

  it('should add and retrieve superheroes correctly', () => {
    service.createSuperhero({ name: 'Hero1', superpower: 'Flying', humilityScore: 8 });
    service.createSuperhero({ name: 'Hero2', superpower: 'Invisibility', humilityScore: 9 });

    const heroes = service.getSuperheroes();
    expect(heroes.length).toBe(2);
    expect(heroes[0].name).toBe('Hero2'); 
  });
});
