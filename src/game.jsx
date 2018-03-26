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
        cardLimit={cardLimit}
        matchedCardIds={store.matchedCardIds}
        turnCard={turnCard}
        turnedCardId={store.turnedCardId}
      />
      <Stats
        cardLimit={cardLimit}
        cards={store.matchedCardIds}
      />
    </div>
  );
};

const mapStateToProps = function (state) {
  return {
    activeTurn: state.turnedCards.length,
    matchedCardIds: state.matchedCards,
    turnedCardId: state.turnedCards[0],
  };
};

export default connect(mapStateToProps)(Game);
