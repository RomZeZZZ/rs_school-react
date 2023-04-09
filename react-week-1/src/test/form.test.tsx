import SignUp from '../routes/form';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';
test('Render form page', () => {
  render(<SignUp />);
  expect(screen.getByTestId('surname')).toHaveTextContent('Surname:');
});
