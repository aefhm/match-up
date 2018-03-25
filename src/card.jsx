import React from 'react';
import PropTypes from 'prop-types';


const suitLabel = {
  0: 'Clubs',
  1: 'Diamonds',
  2: 'Hearts',
  3: 'Spades',
};

class Card extends React.Component {
  render() {
    return (
      <div className="card" onClick={this.props.click}>
        { this.props.faceUp ? this.props.value + ' of ' + suitLabel[Math.floor(this.props.index / 13)] : 'Back of card'}
      </div>
    );
  }
}

Card.propTypes = {
  click: PropTypes.func,
  faceUp: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

Card.defaultProps = {
  faceUp: true,
};

export default Card;
