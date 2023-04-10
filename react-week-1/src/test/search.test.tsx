import { fireEvent, render, screen } from '@testing-library/react';
import { expect, vi } from 'vitest';
import React from 'react';
import Search from '../components/search_bar';

test('Render Search Bar', () => {
  const mokerSearch = vi.fn();
  render(<Search searchValue={'test_search'} setSearchValue={mokerSearch} />);
  const input = screen.getByPlaceholderText('Search by Name');

  expect(screen.getByDisplayValue('test_search')).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'new_test_value' } });

  expect(mokerSearch).toBeCalledWith('new_test_value');
});
