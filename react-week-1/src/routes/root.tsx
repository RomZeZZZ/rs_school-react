import React from 'react';
import Search from '../components/search_bar';
import Card from '../components/card';
import cardsDb from '../components/db';
import '../styles/root.css';
import IRootProps from 'interfaces/IRootProps';
function Root({ searchValue, setSearchValue }: IRootProps) {
  return (
    <main className="main">
      <div className="container">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="card_field">
          {cardsDb.map((item) => (
            <Card key={item.id} card={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
export default Root;
