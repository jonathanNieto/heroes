import { heroes, Hero } from '../data/heroes';

export const getHeroesByPublisher = (publisher: string) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`Invalid publisher: ${publisher}`);
  }
  return heroes?.filter((hero: Hero) => hero?.publisher === publisher);
};
