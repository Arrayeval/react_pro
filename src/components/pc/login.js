import {UserApi} from '../../service/user'
import React, {Component} from "react"
import "../../scss/pcStyle/login.scss"
class userLogin extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
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
            this.props.history.push({pathname:'/ShowJueJin'})
          }
        }).catch(err => {
          console.log(err)
        })
    }

    render () {
        return (
            <div className="login-modal-wrapper">
                <div className="login-modal">
                   <div className="login-input-wrapper">
                    <input className="login-item" onChange={this.handelVal.bind(this)} name="userName" placeholder="用户名"/>
                    <input className="login-item" onChange={this.handelVal.bind(this)} name="password" placeholder="密码"/>
                   </div>
                   <p className="login-btn" onClick={this.userLogin.bind(this)}>登录</p>
                </div>
            </div>
        )
    }
}

export default userLogin