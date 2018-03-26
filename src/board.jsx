import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';


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

class Board extends React.Component {
  componentWillMount() {
    this.cards = [];

    for (let i = 0; i < this.props.cardLimit; i++)
      this.cards.push(<Card
        key={i}
        index={i}
        value={i % 13}
        click={() => { this.props.turnCard(i, this.props.turnedCardId); }}
      />);

    this.cards = shuffle(this.cards);
  }

  render() {

    return (
      <div className="board">
        {this.cards}
      </div>
    )
  }
}

Board.propTypes = {
  cardLimit: PropTypes.number.isRequired,
};

export default Board;
