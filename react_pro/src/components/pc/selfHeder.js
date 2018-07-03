import React, { Component } from 'react';
import '../../scss/pcStyle/header.scss'
class selfHeader extends Component {
  render () {
    return (
      <div className='header-wrapper'>
        <div className="inner-wrapper">
          <span>项目管理系统</span>
          <div className="user-info inline-block float-right">
            <span className="name">evel</span>
            <span className='mark-line'>|</span>
            <span className="user-logo inline-block"></span>
            <span>></span>
          </div>
        </div>
      </div>
    )
  }
}
export default selfHeader;