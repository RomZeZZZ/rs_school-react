import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    text: '',
    page: 1,
  },
  reducers: {
    setSearchValue(state, action) {
      state.text = action.payload;
    },
    setPageNumber(state, action) {
      state.page = action.payload;
    },
  },
});
export const { setSearchValue, setPageNumber } = searchSlice.actions;
export default searchSlice.reducer;
