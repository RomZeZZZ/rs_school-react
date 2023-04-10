import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/header';

test('Render Header', () => {
  render(<Header />, { wrapper: BrowserRouter });

  const aboutLink = screen.getByText('About Us');
  const signUpLink = screen.getByText('Sign Up');

  expect(screen.getByText('About Us')).toBeInTheDocument();
  expect(screen.getByText('Sign Up')).toBeInTheDocument();

  fireEvent.click(aboutLink);
  expect(screen.getByTestId('curr_page')).toHaveTextContent('About Us');

  fireEvent.click(signUpLink);
  expect(screen.getByTestId('curr_page')).toHaveTextContent('Sign Up');
});
