import React, {Component} from 'react'
import '../../scss/pcStyle/communication.scss'
let ws = new WebSocket('ws://localhost:8081')
class communication extends Component {
    constructor (props) {
        super(props)
        this.state = {
            nickname: '',
            contentHtml: []
        }
    }
    handleChangeModule (event) {
        this.setState({
            nickname: event.target.value
        })
    }

    ininitSocket () {
        ws.onopen = function (e) {
            console.log('connect to server opened');
        }
    }

    // 显示
    appendLog (type, nickname, message) {
        console.log(type, nickname, message)
        if(typeof message === 'undefined' ) return ;
        // var messages = document.getElementById('messages');
        // var messageElem = document.createElement('li');
        let htmlObj = {
            "notification": "<span class='label label-info'>*</span>",
            "nick_update": "<span class='label label'></span>",
            "_default": `<span class='label label-success'>${nickname}</span>`
        }
        let preface_label = htmlObj[type] || htmlObj._default
        let _contentHtml = this.state.contentHtml.slice();
        _contentHtml.push({
            label: preface_label,
            msg: message
        })
        this.setState({
            contentHtml: _contentHtml
        })    
    }
    getContentHtml () {
        console.log(this.state.contentHtml)
       return  this.state.contentHtml.map((item) => (
             `<li>${item.label}"&nbsp;&nbsp;"${item.msg}</li>`
        ))
    }

    sendMessage () {
         
        let messageField = document.getElementById("message");
        if (!messageField.value) return '';
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(messageField.value)
        }
        messageField.value ='';
        messageField.focus();
    }
    
    // 修改名称
    changeName () {
        let name = this.state.nickname;
        if (ws.readyState === WebSocket.OPEN) {
            ws.send("/nick "+ name)
        }
    }

    componentDidMount () {
        this.ininitSocket();
        let that = this;
        // 收到消息
       ws.onmessage = function (e) {
            var data = JSON.parse(e.data);
            that.state.nickname = data.nickname;
            that.appendLog(data.type, data.nickname, data.message);
            console.log("ID: [%s] =%s", data.id, data.message);
        }
    
        ws.onclose = function (e) {
            that.appendLog("Connection closed");
            console.log("Connection closed");
        }

    }

    render () {
        return (
            <div className="vertical-center">
                <div className="container">
                    <ul id="messages" className="list-unstyled" dangerouslySetInnerHTML={{__html: this.getContentHtml()}}>
                        {/* {this.getContentHtml()} */}
                    </ul>
                    <hr/>
                    <form role="form" id="char_form" onSubmit={this.sendMessage.bind(this)}>
                        <div className="form-group">
                            <input className="form-control" type="text" id="message" 
                               name="message" 
                                placeholder="Type text to echo in here"  autoFocus/>
                        </div>
                        <button type="button" id="send" className="btn btn-primary" onClick={this.sendMessage.bind(this)}>
                            send Message
                        </button>
                    </form>
                    <div className="form-group">
                        <span>nickname:</span>
                        <input id="name" type="text" name="name" placeholder="new name" onChange={this.handleChangeModule.bind(this)}/>
                        <button className="btn btn-sm btn-info" onClick={this.changeName.bind(this)}>change</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default communication;