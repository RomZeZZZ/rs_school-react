import IRootProps from 'interfaces/IRootProps';
import React from 'react';
function Search({ searchValue, setSearchValue }: IRootProps) {
  return (
    <input
      value={searchValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
      className="main_search"
      type="text"
      placeholder="Search bar"
    />
  );
}

export default Search;
