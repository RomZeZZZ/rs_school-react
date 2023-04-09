import Card from '../components/card';
import { render, screen } from '@testing-library/react';
import { expect, vi } from 'vitest';
import React from 'react';

const testCards = {
  id: 1,
  name: 'test_name',
  status: 'test_status',
  species: 'test_species',
  gender: 'male',
  image: 'test_url',
  location: {
    name: 'test_name_location',
  },
  origin: {
    name: 'test_origin_name',
  },
  onClick: () => {
    vi.fn();
  },
};
test('render Card', () => {
  render(
    <Card
      card={testCards}
      onClick={() => {
        vi.fn();
      }}
    />
  );
  const imgElement = screen.getByAltText('card');
  const nameElement = screen.getByText('Name: test_name');
  const speciesElement = screen.getByText('Species: test_species');
  const genderElement = screen.getByText('Gender: male');
  expect(imgElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
  expect(speciesElement).toBeInTheDocument();
  expect(genderElement).toBeInTheDocument();
});
