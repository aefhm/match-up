import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';


const cardLimit = 52;
const suitLabel = {
  0: 'Clubs',
  1: 'Diamonds',
  2: 'Hearts',
  3: 'Spades',
};

const store = createStore(function (state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
});

class Card extends React.Component {
  render() {
    return (
      <div className="card" onClick={this.props.click}>
        {this.props.value + ' of ' + this.props.suit}
      </div>
    );
  }
}

Card.propTypes = {
  click: PropTypes.func,
};

class Board extends React.Component {
  render() {
    let cards = [];

    for (let i = 0; i < cardLimit; i++)
      cards.push(<Card
        key={i}
        index={i}
        value={i % 13}
        suit={suitLabel[Math.floor(i / 13)]}
        click={function () { console.log('cilkced'); }}
      />);

    cards = shuffle(cards);

    return (
      <div className="board">
        {cards}
      </div>
    )
  }
}

class Stats extends React.Component {
  render() {
    let cards = [];

    for (let i = 0; i < this.props.matchedCards; i++)
      cards.push(<Card key={i} index={i} value={i % 13} suit={suitLabel[Math.floor(i / 13)]} />);

    return (
      <div className="stats">
        You have matched { 5 } cards
        {cards}
      </div>
    );
  }
}

function shuffle(cards) {
  let randomizedCards = [];
  let array = cards.slice();

  while (array.length) {
    let randomIndex = Math.floor(array.length * Math.random());

    randomizedCards.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }

  return randomizedCards;
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Board />
      <Stats />
    </div>
  </Provider>,
  document.getElementById('game')
);
