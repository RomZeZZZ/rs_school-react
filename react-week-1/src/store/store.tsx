import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import searchReducer from './searchSlice';
import { fetchApi } from './fetchApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
const store = configureStore({
  reducer: {
    users: usersReducer,
    inputSearch: searchReducer,
    [fetchApi.reducerPath]: fetchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApi.middleware),
});
setupListeners(store.dispatch);
export default store;
