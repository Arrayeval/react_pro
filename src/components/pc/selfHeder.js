import React, { Component } from 'react';
import LoginModal  from "../common.component/login.component"
import '../../scss/pcStyle/header.scss'

class selfHeader extends Component {
  constructor () {
    super()
    this.state = {
      nickName: '未登录'
    }
  }

  getUserName (name) {
    this.setState({
      nickName: name
    })
  }

  getUserLoginModal () {
   this.refs.loginModal.getUserLoginModal()
  }
  
  goTargetPage (pathname) {
    this.props.history.push({pathname})
  }
   
  render () {
    return (
      <div>
        <LoginModal ref="loginModal" />
        <div className='header-wrapper'>
          <div className="inner-wrapper">
            <span>项目管理系统</span>
            <div className="user-info inline-block float-right">
              <span className="name">{this.state.nickName}</span>
              <span className='mark-line'>|</span>
              <span className="user-logo inline-block" onClick={this.getUserLoginModal.bind(this)}></span>
            </div>
          </div>
        </div>
        <ul className="tabbar-wrapper">
          <li className="tab-item" onClick={this.goTargetPage.bind(this, '/ModuleParts')}>添加模块</li>
          <li className="tab-item" onClick={this.goTargetPage.bind(this, '/stockInfo')}>查看股票信息</li> 
          <li className="tab-item" onClick={this.goTargetPage.bind(this, '/ShowJueJin')}>查看掘金文章</li>
          <li className="tab-item" onClick={this.goTargetPage.bind(this, '/ReduxUse2')}>react-redux使用</li>
        </ul>
      </div>
    )
  }
}
export default selfHeader;