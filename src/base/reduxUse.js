// https://juejin.im/post/5b755537e51d45661d27cdc3#heading-5
import React ,{Component} from 'react'
import store from '../redux/store'
import { connect } from 'react-redux'
import * as Action from '../redux/action'
import {Link } from "react-router-dom"
import {begin_get_user} from '../redux/action'
class RedexUse extends Component {
  constructor(props) {
    super(props)
  }
  // redux fun
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
  onGetUsers = () => {
    // store.dispatch({
    //   ...Action.get_users()
    // })
    this.props.dispatch(begin_get_user())
  }
  render() {
    store.subscribe(() => {
      console.log("reduxUse中subscribe 检测到数据变化了", store.getState())
    })
    // console.log("this.props.temData", this.props.temData)
    return (
      <div style={{paddingTop:'200px'}}>
         <h1 className="text-center mt-5">{JSON.stringify(store.getState())}</h1>
         <Link to='/reduxUse2' className="clearfix">点击一下 go ToRoute2</Link>
         <button className="btn btn-primary mr-2" onClick={this.onIncrement.bind(this)}>
            Increase
          </button>
          <button className="btn btn-danger my-2" onClick={this.onDecrement.bind(this)}>
            Decrease
          </button>
          <button className="btn btn-danger my-2" onClick={this.onGetUsers.bind(this)}>
            getUsers
          </button>
      </div>
    )
  }
}
const mapStateToProps = function(store) {
  return {
    temData: store.changeDataReducer,

  };
};
export default connect(mapStateToProps)(RedexUse);
// export default RedexUse