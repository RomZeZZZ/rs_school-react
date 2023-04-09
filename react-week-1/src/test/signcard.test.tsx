import SignCard from '../components/signCard';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';

const testUser = {
  name: 'Fedor',
  surname: 'Testovich',
  country: 'Belarus',
  gender: 'Male',
  img: '',
};

test('Render user card page', () => {
  render(<SignCard {...testUser} />);
  expect(screen.getByText(/Name/)).toHaveTextContent('Fedor');
  expect(screen.getByText(/Surname/)).toHaveTextContent('Testovich');
  expect(screen.getByText(/Country/)).toHaveTextContent('Belarus');
  expect(screen.getByText(/Gender/)).toHaveTextContent('Male');
});
