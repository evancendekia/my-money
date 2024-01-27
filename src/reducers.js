import { combineReducers } from "redux";

import TransactionReducer from "./app/modules/Transaction/TransactionReducer";

const appReducer = combineReducers({
    Transaction: TransactionReducer,
    Transaction: TransactionReducer
});

const RootReducer = (state, action) => {
//   console.action;
  return appReducer(state, action);
};

export default RootReducer;
