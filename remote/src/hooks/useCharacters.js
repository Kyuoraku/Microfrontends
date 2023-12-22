import { useState, useEffect } from 'react';
import { getCharacters } from '../services/getCharacters';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(data => {
      console.log("🚀 ~ file: useCharacters.js:9 ~ getCharacters ~ data:", data)
      setCharacters(data.results);
    });
  }, []);

  return characters;
};
