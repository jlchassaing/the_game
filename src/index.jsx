import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import ErrorBoundary from './ErrorBoundary';
import rootReducer from './Reducers';
import App from './App';

const thunk = ({ dispatch, getState }) => next => action => (
  typeof action === 'function'
    ? action(dispatch, getState)
    : next(action)
);


const store = createStore(rootReducer, { app: { } }, composeWithDevTools(applyMiddleware(thunk)));

ReactDom.render(
  <Provider store={store} >
    <ErrorBoundary>
      <App title="test" />
    </ErrorBoundary>
  </Provider>
  ,
  document.getElementById('app'),
);

module.hot.accept();
