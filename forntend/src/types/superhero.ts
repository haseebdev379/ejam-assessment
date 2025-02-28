export interface Superhero {
  id?: string;
  alias: string;
  specialAbility: string;
  modestRating: number;
}

export type CreateSuperheroData = Omit<Superhero, 'id'>; 