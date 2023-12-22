import React from 'react';

export const Character = ({ character, display }) => {
  return (
    <div className="col-3">
      <div className="card">
        <div className="card__content">
          <h2 className="card__title">{display.name}: {character.name}</h2>
          <p className="card__text">{display.height}: {character.height} cm</p>
          <p className="card__text">{display.mass}: {character.mass} kg</p>
          <p className="card__text">{display.hairColor}: {character.hair_color}</p>
        </div>
      </div>
    </div>
  );
};
