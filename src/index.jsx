import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Game from './game';
import reducer from './reducer';

// const logger = store => next => action => {
//  console.log('dispatching', action)
//  let result = next(action)
//  console.log('next state', store.getState())
//  return result
// }

const initialState = {
  matchedCards: [],
  turnedCards: [],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>, document.getElementById('game')
);
