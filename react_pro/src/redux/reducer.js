// Reducer
import * as ActionTypes from './actionType'
export default (state = 33, action) => {
  // const count = state.count
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1
    case ActionTypes.DECREMENT:
      return state - 1
    default:
      return state
  }
}

// module.exports = counter