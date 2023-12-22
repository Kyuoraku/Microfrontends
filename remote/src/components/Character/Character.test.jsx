import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Character } from './Character';
import { translations } from '../../lang/translations';

describe('Character Component', () => {
  const mockCharacter = {
    id: '1',
    name: 'John Doe',
    image: 'test-image.jpg',
    species: 'Human',
    status: 'Alive'
  };

  it('renders correctly', () => {
    render(<Character character={mockCharacter} lang="en-US" />);
    expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Race: Human')).toBeInTheDocument();
    expect(screen.getByText('Status: Alive')).toBeInTheDocument();
  });

  it('displays character information correctly', () => {
    render(<Character character={mockCharacter} lang="en-US" />);
    expect(screen.getByAltText('John Doe')).toHaveAttribute('src', 'test-image.jpg');
    expect(screen.getByText('Race: Human')).toBeInTheDocument();
  });

  it('displays information according to the language', () => {
    const lang = 'es-ES';
    render(<Character character={mockCharacter} lang={lang} />);
    const display = translations[lang];

    expect(screen.getByText(`${display.name}: John Doe`)).toBeInTheDocument();
    expect(screen.getByText(`${display.race}: Human`)).toBeInTheDocument();
  });
});
