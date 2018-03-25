import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './card';
import Board from './board';
import Stats from './stats';


const cardLimit = 52;

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
    <div>
      <Board cardLimit={cardLimit}/>
      <Stats />
    </div>
  </Provider>,
  document.getElementById('game')
);
