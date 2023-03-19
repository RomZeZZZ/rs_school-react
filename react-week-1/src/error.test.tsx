import Error from './routes/error';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
test('Render error page', () => {
  render(<Error />);
  expect(screen.getByTestId('errorDiv')).toHaveTextContent('404. Page not found');
});
