import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { List } from './List';
import * as useCharactersHook from '../../hooks/useCharacters';
import * as useLanguageDisplayHook from '../../hooks/useLanguageDisplay';

jest.mock('../../hooks/useCharacters');
jest.mock('../../hooks/useLanguageDisplay');

describe('List Component', () => {
  afterEach(cleanup);

  // Test 1: Renderización Básica
  it('renders correctly', () => {
    useCharactersHook.useCharacters.mockReturnValue([]);
    useLanguageDisplayHook.useLanguageDisplay.mockReturnValue({ title: 'Test Title' });

    render(<List />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  // Test 2: Renderización del Título según el Idioma
  it('renders the title according to the language', () => {
    useCharactersHook.useCharacters.mockReturnValue([]);
    useLanguageDisplayHook.useLanguageDisplay.mockReturnValue({ title: 'Lista de Personajes' });

    render(<List lang="es-ES" />);
    expect(screen.getByText('Lista de Personajes')).toBeInTheDocument();
  });

  // Test 8: Actualización de Componentes al Cambiar el Idioma
  it('updates the components when the language changes', () => {
    useCharactersHook.useCharacters.mockReturnValue([]);
    useLanguageDisplayHook.useLanguageDisplay.mockReturnValue({ title: 'Characters List' });

    const { rerender } = render(<List lang="en-US" />);
    expect(screen.getByText('Characters List')).toBeInTheDocument();

    useLanguageDisplayHook.useLanguageDisplay.mockReturnValue({ title: 'Lista de Personajes' });
    rerender(<List lang="es-ES" />);
    expect(screen.getByText('Lista de Personajes')).toBeInTheDocument();
  });
});
