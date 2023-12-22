import React from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import { useLanguageDisplay } from '../../hooks/useLanguageDisplay';
import { Character } from '../Character/Character'; 
import "./List.css";

export const List = ({ lang = 'en-US' }) => {
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
        {characters.map(character => (
          <Character key={character.name} character={character} display={display} />
        ))}
      </div>
    </div>
  );
};

export default List;
