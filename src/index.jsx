import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Game from './game';
import reducer from './reducer';


const initialState = {
  faceUpCardIds: [],
  matchedCardIds: [],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>, document.getElementById('game')
);
