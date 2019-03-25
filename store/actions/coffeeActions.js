// Create the following actions:
// getCoffeeShops: fetches all the coffee shops from the following API : http://coffee.q8fawazo.me/api/?format=json
// setCoffeeShopsLoading: sets the loading state (all you need to do is set the type of action)

import * as types from "./types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      let res = await axios.get("http://coffee.q8fawazo.me/api/?format=json");

      let coffeeShop = res.data;

      dispatch({
        type: types.GET_COFFEESHOPS,
        payload: coffeeShop
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return {
    type: types.COFFEESHOPS_LOADING
  };
};
