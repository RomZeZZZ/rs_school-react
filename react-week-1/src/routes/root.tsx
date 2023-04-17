import React, { useState } from 'react';
import Search from '../components/search_bar';
import Card from '../components/card';
import PrograssingMsg from '../components/progressing';
import Modal from '../components/modal';
import '../styles/root.css';
import ICardProps from 'interfaces/ICardProps';
import { useDispatch, useSelector } from 'react-redux';
import IRootState from 'interfaces/IRootState';
import { setPageNumber } from '../store/searchSlice';
import { useGetCardsByNameQuery } from '../store/fetchApi';
function Root() {
  const dispatch = useDispatch();
  const setPage = (value: number) => {
    dispatch(setPageNumber(value));
  };
  const pageNumber: number = useSelector((state: IRootState) => {
    return state.inputSearch.page;
  });
  const searchValue: string = useSelector((state: IRootState) => {
    return state.inputSearch.text;
  });
  const [searchInputValue, setSearchInputValue] = useState(searchValue);
  const {
    data: byNameData,
    error: byNameError,
    isLoading: byNameLoad,
  } = useGetCardsByNameQuery({
    name: searchInputValue,
    page: pageNumber,
  });
  const [showModal, setShowModal] = useState({ status: false, id: null as number | null });
  function ChangePage(page: string): void {
    if (page === 'next' && byNameData?.info.next) {
      setPage(pageNumber + 1);
    } else if (byNameData?.info.prev) {
      setPage(pageNumber - 1);
    }
  }
  function SearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPage(1);
    setSearchInputValue(searchValue);
  }
  return (
    <main className="main">
      {showModal.status && (
        <Modal id={showModal.id} onClick={() => setShowModal({ status: false, id: null })} />
      )}
      <div className="container">
        <form className="search_form" onSubmit={SearchSubmit}>
          <Search />
          <button data-testid="search-button" type="submit">
            Enter
          </button>
        </form>
        <div className="button_container">
          <button className="button" onClick={() => ChangePage('prev')}>
            Prev
          </button>
          <button className="button" onClick={() => ChangePage('next')}>
            Next
          </button>
        </div>
        <div data-testid="results-container" className="card_field">
          {byNameData?.results && !byNameLoad && !byNameError ? (
            <div className="card_field">
              {byNameData.results.map((item: ICardProps) => (
                <Card
                  onClick={() => setShowModal({ status: true, id: item.id })}
                  key={item.id}
                  card={item}
                />
              ))}
            </div>
          ) : (
            <>
              {byNameLoad && <PrograssingMsg message="Loading..." />}
              {byNameError && <PrograssingMsg message="There is nothing here" />}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
export default Root;
