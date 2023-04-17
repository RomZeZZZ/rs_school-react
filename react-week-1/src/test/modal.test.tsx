import React from 'react';
import Modal from '../components/modal';
import { act, render, screen } from '@testing-library/react';
import ICardProps from '../interfaces/ICardProps';
import { expect, vi } from 'vitest';

describe('Modal component', () => {
  test('renders "Progressing..." text while fetching data', async () => {
    act(() => {
      render(<Modal id={1} onClick={vi.fn} />);
    });
    const progressingText = await screen.findByText('Progressing...');
    expect(progressingText).toBeInTheDocument();
  });

  test('renders character information after data is fetched', async () => {
    const mockCharacter: ICardProps = {
      id: 1,
      name: 'Rick Sanchez',
      species: 'Human',
      gender: 'Male',
      status: 'Alive',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      location: { name: 'Earth' },
      origin: { name: 'Earth' },
      onClick: function (): void {
        vi.fn();
      },
    };

    vi.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCharacter),
      } as Response)
    );

    act(() => {
      render(<Modal id={1} onClick={vi.fn} />);
    });

    const characterName = await screen.findByText('Name: Rick Sanchez');
    expect(characterName).toBeInTheDocument();

    const species = await screen.findByText('Species: Human');
    expect(species).toBeInTheDocument();

    const gender = await screen.findByText('Gender: Male');
    expect(gender).toBeInTheDocument();

    const status = await screen.findByText('Status: Alive');
    expect(status).toBeInTheDocument();

    const location = await screen.findByText('Location: Earth');
    expect(location).toBeInTheDocument();

    const origin = await screen.findByText('Origin: Earth');
    expect(origin).toBeInTheDocument();

    vi.restoreAllMocks();
  });
});
