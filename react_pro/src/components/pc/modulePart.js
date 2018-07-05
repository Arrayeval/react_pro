//  首页模块
 import React, {Component} from 'react'
 import '../../scss/pcStyle/modulePart.scss'
 class moduleParts extends Component {
   render () {
    return (
      <div className="module-part-wrapper">
        <div className="config-wrapper">
          <div className="config-area">
            <span className="add-btn inline-block">+ Add</span>
            <span className="login-out-area">
              <span className="change-item"> </span>
              <span className="change-item"></span>
              <span className="login-out-item">安全退出</span>
            </span>
          </div>
        </div>
      </div>
    )
   }
 }
 export default moduleParts;