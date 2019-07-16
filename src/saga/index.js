/**
 * 参考链接：
 * https://redux-saga-in-chinese.js.org/
 * https://www.cnblogs.com/mengff/p/9505474.html
 * https://www.jianshu.com/p/
 * https://www.jianshu.com/p/e84493c7af35
 **/ 
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import axios from 'axios'

import {BEGIN_GET_POSTS} from '../redux/actionType'
import {get_errors, get_users} from '../redux/action'
function* showPostsAsync () {
    try {
        const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
        yield put(get_users(response.data))
    } catch(e) {
        yield put(get_errors(e))
    }
 }

 // wacther saga
function* watchGetPosts() {
    yield takeLatest(BEGIN_GET_POSTS, showPostsAsync);
}

// root saga
export default function* rootSaga() {
    yield watchGetPosts()
} 