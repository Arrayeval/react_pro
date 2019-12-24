import * as ActionTypes from './actionType'
import {errorInfo} from './data.js'
const initialState = {
  ...errorInfo
}

export const fetchInfoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.GET_ARTICLE_LIST_FAIL: 
      return {
        status: 400,
        msg: '获取文章列表失败'
      }  
    case ActionTypes.GET_ARTICLE_LIST_SUCC: 
      return {
        status: 200,
        msg: '获取文章列表成功succ'
      }  
    default:
      return state
  }
}