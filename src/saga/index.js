/**
 * 参考链接：
 * https://redux-saga-in-chinese.js.org/
 * https://www.cnblogs.com/mengff/p/9505474.html
 * https://www.jianshu.com/p/
 * https://www.jianshu.com/p/e84493c7af35
 **/ 
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import article from '../service/article/index';

import { BEGIN_GET_POSTS, ARTICLE_FETCH_REQUEST, GET_ARTICLE_LIST_SUCC, GET_ARTICLE_LIST_FAIL } from '../redux/actionType'
import {get_errors, get_users} from '../redux/action'
function* showPostsAsync () {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
    yield put(get_users(response.data))
  } catch(e) {
    yield put(get_errors(e))
  }
 }

 function* getArticleList(obj) {
  try {
    const articleListData = yield call(article.getArticleList, {...obj.preload});
    yield put({
      type: GET_ARTICLE_LIST_SUCC,
      preload: articleListData
    });
  } catch(e) {
    yield put({
      type: GET_ARTICLE_LIST_FAIL,
      message: e.message
    });
  }
}

/* function* watchGetArticleStatus() {
  while(true) {
    const action = yield take('GET_ARTICLE_LIST_SUCC');
    console.log(action);
  }
} */


 // wacther saga
function* watchGetPosts() {
  yield takeLatest(BEGIN_GET_POSTS, showPostsAsync);
  yield takeEvery(ARTICLE_FETCH_REQUEST, getArticleList);
}

// root saga
export default function* rootSaga() {
  yield watchGetPosts()
} 