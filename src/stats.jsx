import React from 'react';
import Card from './card';
import PropTypes from 'prop-types';

class Stats extends React.Component {
  displayMessage() {
    if (this.props.cards.length == 52)
      return 'You have won';
    else
      return 'You have matched ' + this.props.cards.length + ' cards';
  }

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
        <div>
          {this.displayMessage()}
          {this.cards}
        </div>
      </div>
    );
  }
}

Stats.propTypes = {
  cards: PropTypes.array,
};

export default Stats;
