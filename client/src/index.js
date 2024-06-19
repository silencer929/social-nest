import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
// import './index.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

store.dispatch(loadUser());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);