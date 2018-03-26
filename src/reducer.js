const reducer = function (state = initialState, action) {
  switch (action.type) {
    case 'TURN_CARD':
      return Object.assign({}, state, {
        faceUpCardIds: [...state['faceUpCardIds'], action.payload],
      });
    case 'MATCHED_CARDS':
      return Object.assign({}, state, {
        matchedCardIds: [...state['matchedCardIds'], ...action.payload],
        faceUpCardIds: [],
      });
    case 'CLEAR_TURNED_CARDS':
      return Object.assign({}, state, {
        faceUpCardIds: [],
      });
    default:
      return state;
  }
};

export default reducer;
