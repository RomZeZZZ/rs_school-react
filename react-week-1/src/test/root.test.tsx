import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import Root from '../routes/root';
import { vi } from 'vitest';
import React from 'react';

describe('Root component', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                id: 1,
                name: 'Rick Sanchez',
                status: 'Alive',
                species: 'Human',
                gender: 'Male',
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              },
              {
                id: 2,
                name: 'Morty Smith',
                status: 'Alive',
                species: 'Human',
                gender: 'Male',
                image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              },
            ],
            info: {
              next: 'https://rickandmortyapi.com/api/character/?page=2',
              prev: null,
              count: 671,
              pages: 34,
            },
            error: null,
          }),
      } as Response)
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the search input', async () => {
    render(
      <Root
        searchValue={''}
        setSearchValue={() => {
          vi.fn();
        }}
      />
    );
    await waitFor(() => {
      const searchInput = screen.getByPlaceholderText('Search by Name');
      expect(searchInput).toBeInTheDocument();
    });
  });

  it('renders the search button', async () => {
    render(
      <Root
        searchValue={''}
        setSearchValue={() => {
          vi.fn();
        }}
      />
    );
    await waitFor(() => {
      const searchButton = screen.getByRole('button', { name: 'Enter' });
      expect(searchButton).toBeInTheDocument();
    });
  });

  it('fetches and renders the characters data', async () => {
    render(
      <Root
        searchValue={''}
        setSearchValue={() => {
          vi.fn();
        }}
      />
    );
    const characterName = await screen.findByText('Name: Rick Sanchez');
    expect(characterName).toBeInTheDocument();
  });

  it('renders the next button', async () => {
    render(
      <Root
        searchValue={''}
        setSearchValue={() => {
          vi.fn();
        }}
      />
    );
    await waitFor(() => {
      const nextButton = screen.getByRole('button', { name: 'Next' });
      expect(nextButton).toBeInTheDocument();
    });
  });

  it('renders the prev button', async () => {
    render(
      <Root
        searchValue={''}
        setSearchValue={() => {
          vi.fn();
        }}
      />
    );
    await waitFor(() => {
      const prevButton = screen.getByRole('button', { name: 'Prev' });
      expect(prevButton).toBeInTheDocument();
    });
  });

  it('fetches and renders the next page of characters when next button is clicked', async () => {
    render(
      <Root
        searchValue={''}
        setSearchValue={() => {
          vi.fn();
        }}
      />
    );
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);
    const characterName = await screen.findByText('Name: Rick Sanchez');
    expect(characterName).toBeInTheDocument();
  });

  it('fetches and renders the previous page of characters when prev button is clicked', async () => {
    render(
      <Root
        searchValue={''}
        setSearchValue={() => {
          vi.fn();
        }}
      />
    );
    const prevButton = screen.getByRole('button', { name: 'Prev' });
    fireEvent.click(prevButton);
    const characterName = await screen.findByText('Name: Rick Sanchez');
    expect(characterName).toBeInTheDocument();
  });

  it('fetches and renders the search results when search form is submitted', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Root
        searchValue={''}
        setSearchValue={() => {
          vi.fn();
        }}
      />
    );

    const searchInput = getByPlaceholderText('Search by Name');
    const searchButton = getByTestId('search-button');

    await waitFor(() => {
      act(() => {
        fireEvent.change(searchInput, { target: { value: 'rick' } });
        fireEvent.click(searchButton);
        expect(getByTestId('results-container')).toBeInTheDocument();
      });
    });
  });
});
