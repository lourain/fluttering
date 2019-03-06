import { combineReducers } from 'redux'
import * as ActionTypes from './actionTypes'

export const directory = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.DIRECTORY:
      return action.data
    default:
      return 'no match type!!!'
  }
}
export const receive_data = (state={}, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_DATA:
      return state = action.data;
    default:
      return state;
  }
};

export const count = (state = 9, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};


const rootRuducer = combineReducers({
  directory,count,receive_data
})
export default rootRuducer


