import React from 'react';
import { connect } from 'react-redux';
import Board from './board';
import Stats from './stats';


const cardLimit = 52;

const Game = function (store) {

  //TODO make this a promise 😞
  function turnCard(id, turnedCardIds) {
    if (turnedCardIds && turnedCardIds.length < 2) {
      store.dispatch({
        type: 'TURN_CARD',
        payload: id,
      });
    }

    if (turnedCardIds.length == 1) {
      setTimeout(function () {
        let first = turnedCardIds[0];
        let second = id;

        if (first !== second && first % 13 === second % 13) {
          store.dispatch({
            type: 'MATCHED_CARDS',
            payload: [first, second],
          });
        } else {
          store.dispatch({
            type: 'CLEAR_TURNED_CARDS',
          });
        }
      }, 1000);
    }
  }

  return (
    <div>
      <Board
        cardLimit={cardLimit}
        matchedCardIds={store.matchedCardIds}
        turnCard={turnCard}
        faceUpCardIds={store.faceUpCardIds}
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
    activeTurn: state.faceUpCardIds.length,
    matchedCardIds: state.matchedCardIds,
    faceUpCardIds: state.faceUpCardIds,
  };
};

export default connect(mapStateToProps)(Game);
