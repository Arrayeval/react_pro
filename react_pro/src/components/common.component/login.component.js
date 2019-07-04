import React, { Component } from 'react'
import CommonModal  from "../common.component/modal"
import {UserApi} from '../../service/user'
import '../../scss/pcStyle/modalSty.scss'
class LoginComponent extends Component {
    constructor () {
        super()
    }

    handelVal (event) {
        let _name = event.target.name
        let _obj = {};
        _obj[_name] = event.target.value
        this.setState({..._obj});
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
            </div>
        )
    }
}
export default LoginComponent;