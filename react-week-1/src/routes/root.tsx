import React, { useEffect, useState } from 'react';
import Search from '../components/search_bar';
import Card from '../components/card';
import PrograssingMsg from '../components/progressing';
import Modal from '../components/modal';
import '../styles/root.css';
import IRootProps from 'interfaces/IRootProps';
import ICardProps from 'interfaces/ICardProps';
import ICardPages from 'interfaces/ICardPages';
function Root({ searchValue, setSearchValue }: IRootProps) {
  const [characters, setCharactersDb] = useState<ICardProps[]>([]);
  const [showModal, setShowModal] = useState({ status: false, id: null as number | null });
  const [pages, setPages] = useState<ICardPages>();
  const [message, setMessage] = useState('Progressing...');
  function fetchCharactersData(apiUrl: string): void {
    setMessage('Progressing...');
    setCharactersDb([]);
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCharactersDb(data.results);
        !data.error
          ? setPages({ next: data.info.next, prev: data.info.prev })
          : (() => {
              setMessage(data.error);
              setPages({ next: '', prev: '' });
            })();
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
        setMessage('Ups something went wrong');
      });
  }
  useEffect(() => {
    searchValue
      ? fetchCharactersData(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
      : fetchCharactersData(`https://rickandmortyapi.com/api/character`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function ChangePage(page: string): void {
    if (page === 'next' && pages && pages.next) {
      fetchCharactersData(pages.next);
    } else if (pages && pages.prev) {
      fetchCharactersData(pages.prev);
    }
  }
  function SearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    searchValue
      ? fetchCharactersData(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
      : fetchCharactersData(`https://rickandmortyapi.com/api/character`);
  }
  return (
    <main className="main">
      {showModal.status && (
        <Modal id={showModal.id} onClick={() => setShowModal({ status: false, id: null })} />
      )}
      <div className="container">
        <form className="search_form" onSubmit={SearchSubmit}>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
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
          {characters && characters.length !== 0 ? (
            <div className="card_field">
              {characters.map((item: ICardProps) => (
                <Card
                  onClick={() => setShowModal({ status: true, id: item.id })}
                  key={item.id}
                  card={item}
                />
              ))}
            </div>
          ) : (
            <PrograssingMsg message={message} />
          )}
        </div>
      </div>
    </main>
  );
}
export default Root;
