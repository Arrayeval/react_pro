import React, { Component } from 'react';
import {UserApi} from '../../service/user'
import {GetDataAPi} from '../../service/outerData'
import '../../scss/pcStyle/header.scss'
class selfHeader extends Component {
  userLogin () {
    UserApi.login({username: "admin", password: '123456'}).then(res => {
      if (res.data.code === 0) {
        this.getListData()
      }
    }).catch(err => {
      console.log(err)
    })
  }
  getListData () {
    GetDataAPi.getList({
      src: "web",
      before: "595950110943",
      limit: 20,
      category: "all"
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  }
  render () {
    return (
      <div className='header-wrapper'>
        <div className="inner-wrapper">
          <span>项目管理系统</span>
          <div className="user-info inline-block float-right">
            <span className="name">evel</span>
            <span className='mark-line'>|</span>
            <span className="user-logo inline-block" onClick={this.userLogin.bind(this)}></span>
            <span>></span>
          </div>
        </div>
      </div>
    )
  }
}
export default selfHeader;