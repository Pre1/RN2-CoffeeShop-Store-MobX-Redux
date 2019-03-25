// in coffeeReducer.js:
// Set the initial state to include coffeeShops which is set to an empty array and loading which is set to false.
// If the action is GET_COFFEESHOPS, populate coffeeshops with the incoming payload and set loading to false.
// If the action is COFFEESHOPS_LOADING, set loading to true.

import * as types from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: action.payload,
        loading: false
      };

    case types.COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default reducer;
