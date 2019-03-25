import { createStore, combineReducers, applyMiddleware } from "redux";
// add redux-thunk
import thunk from "redux-thunk";

import cartReducer from "./reducers/cartReducer";
import coffeeReducer from "./reducers/coffeeReducer";

const rootReducer = combineReducers({
  rootCart: cartReducer,
  rootCoffee: coffeeReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
