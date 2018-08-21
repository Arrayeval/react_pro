// Reducer
import * as ActionTypes from './actionType'
const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}
export default (state, action) => {
  state = {...initialState}
  switch (action.type) {
    case ActionTypes.INCREMENT:
      state.cart[0].quantity = state.cart[0].quantity + action.preload.quantity
      console.log('state', state)
      return {
        ...state,
      }
    case ActionTypes.DECREMENT:
      // return state - 1
      state.cart[0].quantity = state.cart[0].quantity - action.preload.quantity
      console.log('state', state)
      return {...state}
    default:
      // return state
      return state
  }
}

// module.exports = counter