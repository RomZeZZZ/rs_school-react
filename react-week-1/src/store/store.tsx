import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import searchReducer from './searchSlice';
const store = configureStore({
  reducer: {
    users: usersReducer,
    inputSearch: searchReducer,
  },
});
export default store;
