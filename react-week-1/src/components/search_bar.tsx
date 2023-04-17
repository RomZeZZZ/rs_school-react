import React from 'react';
import IRootState from '../interfaces/IRootState';
import { setSearchValue } from '../store/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
function Search() {
  const dispatch = useDispatch();
  const setValue = (value: string) => {
    dispatch(setSearchValue(value));
  };
  const searchValue: string = useSelector((state: IRootState) => {
    return state.inputSearch.text;
  });
  return (
    <input
      value={searchValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
      className="main_search"
      type="text"
      placeholder="Search by Name"
    />
  );
}

export default Search;
