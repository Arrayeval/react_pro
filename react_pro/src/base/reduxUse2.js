// https://juejin.im/post/5b755537e51d45661d27cdc3#heading-5
// https://github.com/naihe138/react-plan
import React ,{Component} from 'react'
import store from '../redux/store'
import * as Action from '../redux/action'
import { connect } from 'react-redux'
import {Link } from "react-router-dom"
class RedexUse2 extends Component {
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
  render() {
    store.subscribe(() => {
      console.log("reduxUse2中subscribe 检测到数据变化了", store.getState())
    })
    console.log("this.props.temDate", this.props.temData)
    return (
      <div style={{paddingTop:'200px'}}>
         <h1 className="text-center mt-5">{JSON.stringify(store.getState())}</h1>
         <Link to='/reduxUse' className="clearfix">点击一下 go ToReduxUse</Link>
         <button className="btn btn-primary mr-2" onClick={this.onIncrement.bind(this)}>
            Increase
          </button>
          <button className="btn btn-danger my-2" onClick={this.onDecrement.bind(this)}>
            Decrease
          </button>
      </div>
    )
  }
}
const mapStateToProps = function(store) {
  return {
    temData: store.changeDataReducer
  };
};
export default connect(mapStateToProps)(RedexUse2);
// export default RedexUse2