import React from 'react';
import { Character } from '../Character/Character';
import { useCharacters } from '../../hooks/useCharacters';
import { useLanguageDisplay } from '../../hooks/useLanguageDisplay';
import "./List.css"

export const List = ({ lang = 'es-ES' }) => {
  const characters = useCharacters();
  const display = useLanguageDisplay(lang);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>{display.title}</h3>
        </div>
      </div>
      <div className="row">
        {characters?.map(character => (
          <Character key={character.name} character={character} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default List;
