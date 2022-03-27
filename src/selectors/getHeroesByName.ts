import { heroes, Hero } from '../data/heroes';

export const getHeroesByName = (name: string = '') => {
  console.log('getHeroesByName');
  name = name.toLowerCase();
  if (name === '') {
    return [];
  }
  return heroes?.filter((hero: Hero) => hero?.superhero?.toLowerCase()?.includes(name));
};
