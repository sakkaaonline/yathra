import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers';
import thunk from 'redux-thunk'
import { logger } from 'redux-logger';
import AppWrapper from './router';

const store = createStore(
  rootReducers,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
  document.getElementById('root')
);
