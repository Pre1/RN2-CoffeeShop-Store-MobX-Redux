// n cartReducer.js:
// Set the initial state to include items and set it to an empty array in the initial state.
// For now, all you need in your switch case is the default case.

import * as types from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.typs) {
    default:
      return state;
  }
};

export default reducer;
