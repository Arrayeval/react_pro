// https://juejin.im/post/5b755537e51d45661d27cdc3#heading-5
// https://github.com/naihe138/react-plan
import '../scss/pcStyle/reduxUse.scss'
import React ,{Component} from 'react'
import store from '../redux/store'
import * as Action from '../redux/action'
import * as CreateAct from '../redux/createAction'
import { connect } from 'react-redux'
import {Link } from "react-router-dom"

class RedexUse2 extends Component {
  constructor(props) {
    super(props)
  }
  // redux fun [直接通过dispatch]
  onIncrement = () => {
    store.dispatch({
      ...Action.increase(),
      preload: {quantity:2}
    })
  }

  onDecrement = () => {
    store.dispatch({
      ...Action.decrease(),
      preload: {quantity:3}
    })
  }
  render() {
    const { onDecrement2, addBook, deleteBook } = this.props;
    // store.subscribe(() => {
    //   console.log("reduxUse2中subscribe 检测到数据变化了", store.getState())
    // })
    console.log("this.props.productList", this.props.productList)
    return (
      <div className="know-wrapper">
        <Link to='/reduxUse' className="link-to-page">点击一下 go ToReduxUse 》》》</Link>
        <div className="get-state-sty">
          <p className="des-fun">store.getSate获取数据</p>
          <div className="data-des text-center mt-5">{JSON.stringify(store.getState())}</div>
        </div>
        <p className="des-fun">以下是使用redux的方法操作数据</p>
         <button className="btn btn-primary mr-2" onClick={this.onIncrement.bind(this)}>
            Increase
          </button>
          <button className="btn btn-danger my-2" onClick={this.onDecrement.bind(this)}>
            Decrease
          </button>
          <p className="des-fun">以下是使用redux + react-redux的方法操作数据</p>
          <button className="btn btn-danger my-2" onClick={onDecrement2}>
            react-redux的使用方法[Decrease]
          </button>
          <div className="redux-action-wrapper">
            <hr/>
            <p className="des-fun">以下是使用redux + react-redux + react-action的方法操作数据</p>
            <ul className="redux-ul-wrapper">
              <li  className="redux-li-item">
                <button className="btn btn-redux" onClick={addBook}>测试下reduxAction是不是正确的[添加一本书]</button>
              </li>
              <li  className="redux-li-item"> 
                <button className="btn btn-redux" onClick={deleteBook}>测试下reduxAction是不是正确的[删除一本书]</button>
              </li>
            </ul>
          </div>
          <ul className="study-link">
            <li className="link-item">
              <strong>react-action：</strong>
              <a href="https://redux-actions.js.org/api/combineactions">
                 https://redux-actions.js.org/api/combineactions
              </a>
            </li>
            <li className="link-item">
              <strong>react-redux：</strong>
              <a href="https://www.redux.org.cn/">
                https://www.redux.org.cn/
              </a>
            </li>
          </ul>
      </div>
    )
  }
}
const mapStateToProps = function(store) {
  return {
    productList: store.changeDataReducer,
    bookList: store.BookReducer
  };
};

// // 通过mapDispatchProps
const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement2: () => {
      dispatch({...Action.decrease(),  preload: {quantity:3}})
    },
    addBook: () => {
      dispatch({...CreateAct.addBook(),  payload: {name: '牵牛花的春天', author: '石墨烯', type: 'math', id:2}})
    },
    deleteBook: () => {
      dispatch({...CreateAct.deleteBook(),  payload: {type: 'math', id:2}})
    }
  }
};
 
/**
 * mapStateToProps和mapDispatchToProps,它们定义了 UI 组件的业务逻辑。前者负责输入逻辑，即将外部数据state映射到 UI 组件的参数（props）;
 * 后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action对象，从 UI 组件传出去
 **/
// mapStateToProps会订阅（绑定） Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染
// 如果connect方法省略mapStateToProps参数，那么UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新

/**
 * 如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数
 * 如果mapDispatchToProps是一个对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，
 *  会被当作 Action creator ，返回的 Action 会由 Redux 自动发出
 *  */
export default connect(mapStateToProps, mapDispatchToProps)(RedexUse2);
// export default RedexUse2