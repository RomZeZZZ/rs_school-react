import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from '../components/search_bar';

describe('SearchBar component', () => {
  const initialState = {
    inputSearch: {
      text: '',
      page: 1,
    },
  };
  const mockStore = configureStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render input with placeholder text', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const inputElement = getByPlaceholderText('Search by Name');
    expect(inputElement).toBeInTheDocument();
  });

  it('should update store state when input value changes', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const inputElement = getByPlaceholderText('Search by Name');
    fireEvent.change(inputElement, { target: { value: 'charmander' } });
    expect(store.getActions()).toEqual([{ type: 'search/setSearchValue', payload: 'charmander' }]);
  });
});
