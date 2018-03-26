import React from 'react';
import Card from './card';
import PropTypes from 'prop-types';

class Stats extends React.Component {
  render() {
    this.cards = [];

    for (let i = 0; i < this.props.cards.length; i++)
      this.cards.push(<Card
        key={this.props.cards[i]}
        index={this.props.cards[i]}
        value={this.props.cards[i] % 13}
      />);

    return (
      <div className="stats">
        You have matched { this.props.cards.length || 0 } cards
        {this.cards}
      </div>
    );
  }
}

Stats.propTypes = {
  cards: PropTypes.array,
};

export default Stats;
