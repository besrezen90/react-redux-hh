import React, { ReducerAction } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, Action } from 'redux';

function playlist(
  state: string[] = [],
  action: Action & { payload: string }
) {
  if (action.type === 'ADD_TRACK') {
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(playlist);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
