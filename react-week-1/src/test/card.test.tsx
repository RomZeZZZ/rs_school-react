import Card from '../components/card';
import Root from '../routes/root';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';

const testCards = [
  {
    id: 1,
    title: 'Test Product 1',
    price: 100,
    rating: 2.05,
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
  {
    id: 2,
    title: 'Test Product 2',
    price: 200,
    rating: 5,
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
  },
];

test('render Card', () => {
  render(<Card card={testCards[0]} />);
  const imgElement = screen.getByAltText('card');
  const titleElement = screen.getByText('Test Product 1');
  const priceElement = screen.getByText('Price: 100$');
  const ratingElement = screen.getByText('Rating: 2.05');
  expect(imgElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  expect(ratingElement).toBeInTheDocument();
});

test('render Card2', () => {
  render(<Card card={testCards[1]} />);
  const imgElement = screen.getByAltText('card');
  const titleElement = screen.getByText('Test Product 2');
  const priceElement = screen.getByText('Price: 200$');
  const ratingElement = screen.getByText('Rating: 5');
  expect(imgElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  expect(ratingElement).toBeInTheDocument();
});

test('render Cards', () => {
  render(<Root />);
  expect(screen.getAllByTestId('card').length).toBe(6);
});
