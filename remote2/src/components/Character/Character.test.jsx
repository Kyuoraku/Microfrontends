import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { prettyDOM } from '@testing-library/dom';
import { Character } from './Character';

describe('Character Component', () => {
  it('renders correctly with provided data', () => {
    const mockCharacter = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond'
    };
    const mockDisplay = {
      name: 'Name',
      height: 'Height',
      mass: 'Mass',
      hairColor: 'Hair Color'
    };

    const { container } = render(<Character character={mockCharacter} display={mockDisplay} />);
    console.log(prettyDOM(container));

    expect(screen.getByText(/Name: Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Height: 172 cm/i)).toBeInTheDocument();
    expect(screen.getByText(/Mass: 77 kg/i)).toBeInTheDocument();
    expect(screen.getByText(/Hair Color: blond/i)).toBeInTheDocument();
  
  });

  it('displays information according to the language', () => {
    const mockCharacter = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond'
    };
    const mockDisplayES = {
      name: 'Nombre',
      height: 'Altura',
      mass: 'Masa',
      hairColor: 'Color de cabello'
    };

    const { container } = render(<Character character={mockCharacter} display={mockDisplayES} />);
    console.log(prettyDOM(container));

    expect(screen.getByText(/Nombre: Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Altura: 172 cm/i)).toBeInTheDocument();
    expect(screen.getByText(/Masa: 77 kg/i)).toBeInTheDocument();
    expect(screen.getByText(/Color de cabello: blond/i)).toBeInTheDocument();
  
  });
});
