import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
