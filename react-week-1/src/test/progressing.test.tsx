import PrograssingMsg from '../components/progressing';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import React from 'react';

test('Render progress message', () => {
  render(<PrograssingMsg message={'Test Message'} />);

  expect(screen.getByTestId('progress')).toHaveTextContent('Test Message');
});
