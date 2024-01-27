import * as types from "./TransactionActionTypes";

var initialState = {
  loading: false,
  result: null,
  error: null,
  history: null,
};

function TransactionReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_TRANSACTION_TYPE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
    case types.GET_TRANSACTION_TYPE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        result: action.payload,
        error: null
      });
    case types.GET_TRANSACTION_TYPE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        validation: action.validation || null,
        flags: action.flags || { submitEnabled: false },
        error: action.error,
      });
    default:
      return state;
  }
}

export default TransactionReducer;
