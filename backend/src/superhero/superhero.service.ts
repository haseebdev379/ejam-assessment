import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { HeroProfile } from './superhero.model';

@Injectable()
export class HeroRegistryService {
  private heroRegistry: HeroProfile[] = [];

  createHeroProfile(hero: Omit<HeroProfile, 'id'>): HeroProfile {
    const newHero = {
      ...hero,
      id: uuidv4(),
    };
    this.heroRegistry.push(newHero);
    return newHero;
  }

  getAllHeroes(): HeroProfile[] {
    return this.heroRegistry.sort((a, b) => b.modestRating - a.modestRating);
  }


  clearRegistry(): void {
    this.heroRegistry = [];
  }
} 