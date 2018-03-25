import React from 'react';
import { connect } from 'react-redux';
import Board from './board';
import Stats from './stats';


const cardLimit = 52;

class Game extends React.Component {
  render() {
    return (
      <div>
        <Board
          cardLimit={cardLimit}
          turnCard={function () {}} 
        />
        <Stats />
      </div>
    );
  }
};

function turnCard(id) {
  dispatch({
    type: 'TURN_CARD',
    id: id,
  });
}

const mapStateToProps = function (state) {
  return {
    turnedCards: 0,
  };
};

export default connect(mapStateToProps)(Game);
