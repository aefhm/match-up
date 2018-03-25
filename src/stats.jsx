import React from 'react';
import Card from './card';

class Stats extends React.Component {
  render() {
    let cards = [];

    for (let i = 0; i < this.props.matchedCards; i++)
      cards.push(<Card key={i} index={i} value={i % 13} />);

    return (
      <div className="stats">
        You have matched { 5 } cards
        {cards}
      </div>
    );
  }
}

export default Stats;
