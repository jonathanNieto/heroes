import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../../data/heroes';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}: Hero) => {
  const imgPath = `/assets/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imgPath} alt="" className="card-img" />
          </div>
          <div className="col-8">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {
              (alter_ego !== characters) &&
              <p className="text-muted text-truncate" style={{ maxWidth: '300px' }}>{characters}</p>
            }
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`} className="">Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
