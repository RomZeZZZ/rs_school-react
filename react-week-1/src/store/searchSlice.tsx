import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    text: '',
  },
  reducers: {
    setSearchValue(state, action) {
      state.text = action.payload;
    },
  },
});
export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
