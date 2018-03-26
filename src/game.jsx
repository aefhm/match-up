import React from 'react';
import { connect } from 'react-redux';
import Board from './board';
import Stats from './stats';


const cardLimit = 52;

const Game = function (store) {
  function turnCard(id, turnedCardId) {
    if (turnedCardId !== undefined) {
      if (id !== turnedCardId && id % 13 === turnedCardId % 13) {
        store.dispatch({
          type: 'MATCHED_CARDS',
          payload: [id, turnedCardId],
        });
      } else {
        store.dispatch({
          type: 'CLEAR_TURNED_CARDS',
        });
      }
    } else {
      store.dispatch({
        type: 'TURN_CARD',
        payload: id,
      });
    }
  }

  return (
    <div>
      <Board
        turnedCardId={store.turnedCardId}
        cardLimit={cardLimit}
        turnCard={turnCard}
      />
      <Stats />
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    turnedCardId: state.turnedCards[0],
    activeTurn: state.turnedCards.length,
  };
};

export default connect(mapStateToProps)(Game);
