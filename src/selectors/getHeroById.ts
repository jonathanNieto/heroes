import { heroes, Hero } from '../data/heroes';

export const getHeroesById = (id: string = '') => {
  return heroes?.find((hero: Hero) => hero?.id === id);
};
