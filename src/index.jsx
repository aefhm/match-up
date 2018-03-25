import React from 'react';
import ReactDOM from 'react-dom';


class Card extends React.Component {
  render() {
    return (
      <div className="card">
        {this.props.value + ' of ' + this.props.suit}
      </div>
    );
  }
}

const cardLimit = 52;
const suitLabel = {
  0: 'Clubs',
  1: 'Diamonds',
  2: 'Hearts',
  3: 'Spades',
};

class Board extends React.Component {

  render() {
    let cards = [];

    for (let i = 0; i < cardLimit; i++)
      cards.push(<Card key={i} value={ i % 13 } suit={ suitLabel[Math.floor(i / 13)] } />);

    return (
      <div className="board">
        {cards}
      </div>
    )
  }
}

ReactDOM.render(<Board />, document.getElementById('game'));
