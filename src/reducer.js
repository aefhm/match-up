const reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'TURN_CARD':
      return Object.assign({}, state, {
        turnedCards: [...state['turnedCards'], action.payload],
      });
    case 'MATCHED_CARDS':
      return Object.assign({}, state, {
        matchedCards: [...state['matchedCards'], ...action.payload],
        turnedCards: [],
      });
    case 'CLEAR_TURNED_CARDS':
      return Object.assign({}, state, {
        turnedCards: [],
      });
    default:
      return state;
  }
};

export default reducer;
