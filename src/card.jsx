import React from 'react';
import PropTypes from 'prop-types';


const suitLabel = {
  0: 'Clubs',
  1: 'Diamonds',
  2: 'Hearts',
  3: 'Spades',
};

class Card extends React.Component {
  innerDisplay() {
    if (this.props.faceUp)
      return (this.props.value + 1) + ' of ' + suitLabel[Math.floor(this.props.index / 13)];
    else
      return 'Back of card';
  }

  render() {
    let className = 'card';

    if (this.props.blank)
      className += ' blank';
    else if (this.props.faceUp)
      className += ' face-up';
    else
      className += ' face-down';

    return (
      <div className={className} onClick={this.props.blank ? () => {} : this.props.click}>
        {this.props.blank ? '' : this.innerDisplay()}
      </div>
    );
  }
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  blank: PropTypes.bool,
  click: PropTypes.func,
  faceUp: PropTypes.bool,
};

Card.defaultProps = {
  blank: false,
  faceUp: true,
};

export default Card;
