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
      };
    case ActionTypes.DECREMENT:
      state.cart[0].quantity = state.cart[0].quantity - action.preload.quantity
      return {...state}
    case ActionTypes.GET_USERS: 
      return {...state, ohter: {
          product: 'milk 500ml',
          quantity: 1,
          unitCost: 47
      }}
    case ActionTypes.GET_ERROR: 
      return {
        msg: {
          status: 400,
          statusReason: 'fail'
        }
      }  
    default:
      return state
  }
}
export default changeDataReducer;