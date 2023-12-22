import React from 'react';
import { translations } from '../../lang/translations';

export const Character = ({ character, lang }) => {
  const display = translations[lang];

  const truncateName = (name) => {
    return name.length > 15 ? `${name.substring(0, 15)}...` : name;
  };

  return (
    <div className="col-3" key={character.id}>
    <div className="card">
      <div className="card__image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="card__content">
        <h2 className="card__title">{display.name}: {truncateName(character.name)}</h2>
        <p className="card__text">
          <span>{display.race}: {character.species}</span> - 
          <span> {display.alive}: {character.status}</span>
        </p>
      </div>
    </div>
  </div>
  );
};
