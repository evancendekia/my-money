import * as types from "./DashboardActionTypes";
// import axios from "axios";


export function getTransactionType(){
  return async (dispatch) => {
    dispatch({ type: types.GET_TRANSACTION_TYPE_REQUEST });

    // await axios({
    //   method: "GET",
    //   url: ""
    // }).then(response => {
    //   if(response.data && response.data.success) {
    //     dispatch({
    //       type: types.GET_TRANSACTION_TYPE_SUCCESS,
    //       payload: response.data.data
    //     })
    //   } else {
    //     console.log(response.data.error);
    //     dispatch({
    //       types: types.GET_TRANSACTION_TYPE_FAILURE,
    //       error: response.data.error || "Sorry system under maintenance."
    //     })
    //   }
    // })
    dispatch({
      type: types.GET_TRANSACTION_TYPE_SUCCESS,
      payload: {data: 'test'}
    })
  }
}
