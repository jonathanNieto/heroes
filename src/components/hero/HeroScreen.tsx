import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroesById(id), [id]);
  if (!hero) {
    return <Navigate to='/' />;
  }
  const imgPath = `/assets/${hero?.id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={imgPath} alt={hero?.superhero} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{hero?.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {hero?.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {hero?.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b> {hero?.first_appearance}
          </li>
        </ul>
        <h5 className="mt-4">Characters</h5>
        <p>{hero?.characters}</p>

        <button
          className="btn btn-outline-info mt-4"
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
