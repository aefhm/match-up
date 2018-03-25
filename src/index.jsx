import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Game from './game';

const store = createStore(function (state = {}, action) {
  switch (action.type) {
    case 'TURN_CARD':
      return Object.assign({}, state, { turnedCards: state['turnedCards'] + 1 });
    default:
      return state;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>, document.getElementById('game')
);
