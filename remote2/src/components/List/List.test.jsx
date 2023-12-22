import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from './List';
import * as useCharactersHook from '../../hooks/useCharacters';
import * as useLanguageDisplayHook from '../../hooks/useLanguageDisplay';

// Mock de los hooks custom
jest.mock('../../hooks/useCharacters', () => ({
  useCharacters: jest.fn(),
}));
jest.mock('../../hooks/useLanguageDisplay', () => ({
  useLanguageDisplay: jest.fn(),
}));

describe('List Component', () => {
  // Test 1: Prueba de Renderizado Básico
  it('renders without crashing', () => {
    useCharactersHook.useCharacters.mockReturnValue([]);
    useLanguageDisplayHook.useLanguageDisplay.mockReturnValue({ title: 'Test Title' });
    render(<List />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('renders the title correctly', () => {
    useCharactersHook.useCharacters.mockReturnValue([]);
    useLanguageDisplayHook.useLanguageDisplay.mockReturnValue({ title: 'Lista de personajes' });
    render(<List lang="es-ES" />);
    expect(screen.getByText('Lista de personajes')).toBeInTheDocument();
  });

  it('updates the title when language changes', () => {
    useCharactersHook.useCharacters.mockReturnValue([]);
    useLanguageDisplayHook.useLanguageDisplay.mockReturnValue({ title: 'Characters list' });
    render(<List lang="en-US" />);
    expect(screen.getByText('Characters list')).toBeInTheDocument();
  });
});
