import { useState, useEffect } from 'react';
import { translations } from '../lang/translations';

export const useLanguageDisplay = (lang = 'es-ES') => {
  const [display, setDisplay] = useState(translations[lang]);

  useEffect(() => {
    setDisplay(translations[lang]);
  }, [lang]);

  return display;
};
