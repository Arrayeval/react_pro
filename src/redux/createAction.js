import  {createAction, createActions} from 'redux-actions'
import * as actionTypes from './actionType'

// 获取书本信息
// export const getBookList = createAction(actionTypes.GETBOOKS)

// 添加书本信息
/*
export const addBook = createAction(actionTypes.ADDBOOK, () => {
  //   return {name: '白百合与羽凡', author: '石墨烯'}
  // 这个回掉函数可选，在里面可以做些公共的配置
})
*/
export const {deleteBook, addBook} = createActions(
    {
        [actionTypes.DELETEBOOK]: createAction(actionTypes.DELETEBOOK),
        [actionTypes.ADDBOOK]: createAction(actionTypes.ADDBOOK, () => {
            //   return {name: '白百合与羽凡', author: '石墨烯'}
            // 这个回掉函数可选，在里面可以做些公共的配置
        })
    }
)