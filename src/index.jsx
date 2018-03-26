import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Game from './game';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const initialState = {
  matchedCards: [],
  turnedCards: [],
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'TURN_CARD':
      return Object.assign({}, state, { turnedCards: [...state['turnedCards'], action.payload] });
    case 'MATCHED_CARDS':
      return Object.assign({}, state, {
        turnedCards: [],
        matchedCards: [...state['matchedCards'], ...action.payload]
      });
    case 'CLEAR_TURNED_CARDS':
      return Object.assign({}, state, { turnedCards: [] });
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>, document.getElementById('game')
);
