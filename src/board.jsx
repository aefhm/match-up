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
    let array = new Array;

    for (let i = 0; i < this.props.cardLimit; i++)
      array.push(i);

    this.seedOrder = shuffle(array);
  }

  render() {
    this.cards = new Array(this.props.cardLimit);

    for (let i = 0; i < this.props.cardLimit; i++)
      this.cards[this.seedOrder[i]] = <Card
        key={i}
        index={i}
        value={i % 13}
        blank={this.props.matchedCardIds.includes(i)}
        faceUp={this.props.faceUpCardIds.includes(i)}
        click={() => { this.props.turnCard(i, this.props.faceUpCardIds); }}
      />;

    return (
      <div className="board">
        {this.cards}
      </div>
    )
  }
}

Board.propTypes = {
  cardLimit: PropTypes.number.isRequired,
  faceUpCardIds: PropTypes.array,
  matchedCardIds: PropTypes.array,
  turnCard: PropTypes.func,
};

export default Board;
