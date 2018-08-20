import React ,{Component} from 'react'
import store from '../redux/store'
import * as Action from '../redux/action'
class RedexUse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count:  store.getState()
    }
  }
   // redux fun
   onIncrement = () => {
      store.dispatch(
        // type: 'increase'
        Action.increase()
      )
    }

    onDecrement = () => {
      store.dispatch(
        Action.decrease()
      )
    }
  render() {
    store.subscribe(() => {
      this.setState({count: store.getState()})
    })
    return (
      <div style={{paddingTop:'200px'}}>
         <h1 className="text-center mt-5">{store.getState()}</h1>
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
export default RedexUse