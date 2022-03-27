import { useMemo } from 'react';
import { Hero } from '../../data/heroes';
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

interface Props {
  publisher: string;
};

export const HeroList = ({ publisher }: Props) => {
  const heroes: Hero[] = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="mt-3 row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes.map((hero: Hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  );
};
