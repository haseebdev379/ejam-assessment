import { Test, TestingModule } from '@nestjs/testing';
import { HeroRegistryService } from './superhero.service';
import { HeroProfile } from './superhero.model';

describe('HeroRegistryService', () => {
  let service: HeroRegistryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroRegistryService],
    }).compile();

    service = module.get<HeroRegistryService>(HeroRegistryService);
  });

  afterEach(() => {
    service.clearRegistry();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a hero', () => {
    const heroData = {
      alias: 'Silent Guardian',
      specialAbility: 'Healing',
      modestRating: 8,
    };

    const hero = service.createHeroProfile(heroData);
    expect(hero.id).toBeDefined();
    expect(hero.alias).toBe(heroData.alias);
  });

  it('should sort heroes by modest rating in descending order', () => {
    const hero1 = {
      alias: 'Silent Guardian',
      specialAbility: 'Healing',
      modestRating: 8,
    };
    const hero2 = {
      alias: 'Quiet Helper',
      specialAbility: 'Speed',
      modestRating: 9,
    };
    
    service.createHeroProfile(hero1);
    service.createHeroProfile(hero2);
    
    const sortedHeroes = service.getAllHeroes();
    expect(sortedHeroes[0].modestRating).toBe(9);
    expect(sortedHeroes[1].modestRating).toBe(8);
  });

}); 