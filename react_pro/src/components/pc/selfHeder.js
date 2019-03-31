import React, { Component } from 'react';
import CommonModal  from "../common.component/modal"
import {UserApi} from '../../service/user'
import '../../scss/pcStyle/header.scss'
import '../../scss/pcStyle/modalSty.scss'
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
  handelVal (event) {
    let _name = event.target.name
    let _obj = {};
    _obj[_name] = event.target.value
    this.setState({..._obj});
    console.log(this.state)
  }
  userLogin () {
    UserApi.login({username: this.state.userName, password: this.state.password}).then(res => {
      if (res.data.code === 0) {
        this.getUserName(res.data.username)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  getUserLoginModal () {
    this.refs.modal.setModalVisible(true)
  }
  
  goTargetPage (pathname) {
    this.props.history.push({pathname})
  }
   
  render () {
    return (
      <div>
        <CommonModal ref="modal" title="请正确登录"
          width="400px"
          okText="确认"
          cancelText="取消"
          handleNextEvent={this.userLogin.bind(this)}>
          <p className="input-item"><span className="item-label">用户名：</span><input className="item-input" onChange={this.handelVal.bind(this)} name="userName" placeholder="get username"/></p>
          <p className="input-item"><span className="item-label">密码：</span><input  className="item-input" onChange={this.handelVal.bind(this)} name="password" placeholder="get pasword"/></p>
        </CommonModal>
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
          <li className="tab-item" onClick={this.goTargetPage.bind(this, '/')}>查看掘金文章</li>
        </ul>
      </div>
    )
  }
}
export default selfHeader;