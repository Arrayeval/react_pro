import {handleAction, handleActions} from 'redux-actions'
// import {getBookList, addBook}  from './createAction'

import {bookList} from './data'
import {deepClone} from '../utils/common'
import * as  actionTypes from './actionType'
/*
export const addBookReducer = handleAction(addBook, (state, action) => { // state: 更改之前的值, action: 传入的参数
    let tem = deepClone(state)
    if (!tem[action.payload.type]) {
        tem[action.payload.type] = []
    }
    tem[action.payload.type].push(
        {
            author:  action.payload.author,
            name: action.payload.name
        }
    )
    return tem
},{})
*/
export const BookReducer = handleActions({
    [actionTypes.ADDBOOK]: (state, action) => { // state: 更改之前的值, action: 传入的参数
        let tem = deepClone(state)
        if (!tem[action.payload.type]) {
            tem[action.payload.type] = []
        }
        tem[action.payload.type].push(
            {
                author:  action.payload.author,
                name: action.payload.name,
                id: action.payload.id
            }
        )
        return tem
    },
    [actionTypes.DELETEBOOK]: (state, action) => {
        let tmp = deepClone(state)
        tmp[action.payload.type] = (tmp[action.payload.type] && tmp[action.payload.type].length)? tmp[action.payload.type].filter((item) => {
            return item.id !== action.payload.id
        }) : []
        return tmp
    }
}, bookList)
