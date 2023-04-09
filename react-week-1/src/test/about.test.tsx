import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
import About from '../routes/about';

test('Render About us page', () => {
  render(<About />);
  expect(screen.getByTestId('about_us')).toHaveTextContent('About us');
});
