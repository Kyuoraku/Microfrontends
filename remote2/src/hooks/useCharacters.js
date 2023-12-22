import { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacters';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(data => {
      setCharacters(data);
    });
  }, []);

  return characters;
};
