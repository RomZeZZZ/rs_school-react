import SignUp from '../routes/form';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import React from 'react';

test('Test Form submit', () => {
  render(<SignUp />);
  const alertMock = vi.spyOn(window, 'alert');
  alertMock.mockImplementationOnce(() => 'Please fill out all required fields.');

  const inputName = screen.getByPlaceholderText('Enter your name');
  const inputSurname = screen.getByPlaceholderText('Enter your surname');
  fireEvent.change(inputName, { target: { value: 'ROMAN' } });
  fireEvent.change(inputSurname, { target: { value: 'TEST' } });
  fireEvent.click(screen.getByText('Submit'));
});
