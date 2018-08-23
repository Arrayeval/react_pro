// Reducer
import * as ActionTypes from './actionType'
import {tmpData} from './data.js'
const initialState = {
  ...tmpData
}
const changeDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      state.cart[0].quantity = state.cart[0].quantity + action.preload.quantity
      return {
        ...state,
      }
    case ActionTypes.DECREMENT:
      state.cart[0].quantity = state.cart[0].quantity - action.preload.quantity
      return {...state}
    default:
      return state
  }
}
export default changeDataReducer;