import { FormEvent, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Hero } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

interface FormData {
  searchTxt: string;
};

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location?.search);

  const q = query.q as string || '';
  const { searchTxt, handleInputChange } = useForm<FormData>({ searchTxt: q });

  const heroes = useMemo(() => getHeroesByName(q), [q]);
  // const heroes = getHeroesByName(q);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`?q=${searchTxt}`);
  };
  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchTxt"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchTxt}
            />
            <button
              type="submit"
              className="mt-4 btn btn-outline-primary"
            >
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '')
              ? (<div className="alert alert-info">Search a hero</div>)
              : (!heroes?.length) && (<div className="alert alert-danger">No results found: {q}</div>)
          }
          {
            heroes && heroes.map((hero: Hero) => (<HeroCard key={hero.id} {...hero} />))
          }
        </div>
      </div>
    </>
  );
};
