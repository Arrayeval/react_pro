import React ,{Component} from 'react'

import '../../scss/pcStyle/addModules.scss'
import {Route,BrowserRouter as Router,Switch,Link } from "react-router-dom"
import PropTypes from 'prop-types'
import detail from '../../components/pc/detail'
import { DatePicker} from 'antd'
import PicturesWall from '../../base/picturesWall.js'
import tabs from '../../service/tab'
import uploadFun from '../../service/upload'
import Item from '../../../node_modules/antd/lib/list/Item';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker
class addModules extends Component {
    constructor(props){
        super(props)
        this.state= {
            lag_title:'',       // 标题
            short_des:'',       // 简述
            author_name:'',     // 创建者
            time_date:'',       // 创建时间
            fileData: []  
        }
    };
    
    // 设置时间
    onChangeTime (date, dateString) {
        this.setState({time_date:dateString})
    }
    handelVal (event) {
        let _name = event.target.name
        let _obj = {};
        _obj[_name] = event.target.value
        this.setState({..._obj});
    }

    // 数据提交
    dealData () {
        let _state = this.state
        tabs.addTabs({..._state}).then((res)=>{
            if(res.data.code === 0) {
                this.props.history.push({pathname:'/'})
            }
        }).catch(err=>{
            console.log(err)
        });
        console.log(this.state)
    }

    // 上传logo[子组件的回调]
    handleFile (data) { // 处理img
        if (data.length >=1) {
          let _fileArr =  data.map((item,index)=>{
                return {
                    name: item.name,
                    thumbUrl: item.thumbUrl,
                    type: item.type,
                    uid: item.uid
                }
            })
            this.setState({fileData: _fileArr})
        }
    }

    // 获取模块信息
    getTabsInfo (tabID) {
        tabs.getTabInfo({id: tabID}).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
     
    componentWillMount () {
       if (this.props.location.state && this.props.location.state.tabID !==undefined) {
        this.getTabsInfo.bind(this)(this.props.location.state.tabID)
       }
    }

    render () {
        var fileUploadUrl = uploadFun.uploadMutliImg()
        const fileCount = 1;
        return (
            <div className="add-module-wrapper">
            <p className="route-wrapper">
              <Link to='/' className="back-btn" tag="button">back</Link>
              {this.props.module}
            </p>
            <div className="module-form">
             <div className="item-form">
                <label className="self-lebal">模块名：</label>
                <input type="text" placeholder="请输入文章标题" className="self-input" name="lag_title" value={this.state.lag_title}  onChange={this.handelVal.bind(this)}/>
             </div>
             <div className="item-form"> 
                <label className="self-lebal textarea-lebal">简单描述：</label>
                <textarea type="text" placeholder="随便写写这模块是干什么的..." className="self-textarea" name="short_des" value={this.state.short_des} onChange={this.handelVal.bind(this)}></textarea>
             </div>
             <div className="item-form">
                <label className="self-lebal">创建时间：</label>
                {/* <input type="text" placeholder="请输入文章标题" className="self-input"/> */}
                <DatePicker 
                    format="YYYY-MM-DD HH:mm:ss"
                    onChange={this.onChangeTime.bind(this)}
                    placeholder="创建时间..."/>
             </div>
             <div className="item-form">
                <label className="self-lebal">创建作者：</label>
                <input type="text" placeholder="我们需要一个作者" className="self-input" name="author_name" value={this.state.author_name} onChange={this.handelVal.bind(this)}/>
             </div>
             <div className="item-form">
                <label className="self-lebal">模块logo：</label>
                <div className="add-btn vertical-top">
                    <PicturesWall handleFile = {this.handleFile.bind(this)} actionUrl = {fileUploadUrl} fileCount={fileCount}/>
                </div>
                {/* <input type="text" placeholder="请输入文章标题" className="self-input"/> */}
             </div>
             <div className="item-form">
               <button className="actionBtn" onClick={this.dealData.bind(this)}>提交</button>
               <button className="actionBtn cancelBtn" onClick={this.dealData.bind(this)}>重置</button>
             </div>
            </div>
                {/* 
                <Link to={`${this.props.match.url}/ee/22`} className="clearfix">detailBtn</Link>
                <Route exact path={`${this.props.match.url}`} component={detail}></Route>
                <Route path={`${this.props.match.url}/ee/:id`} component={detail}></Route>
                <Link to='/' className="clearfix">addModule</Link> */}
            </div>
        )
    } 
}

// 用于限制组件props参数类型
addModules.propTypes = {
    module: PropTypes.string
}
addModules.defaultProps = {
    module:''
}

export default addModules;


// 直接定义一个对象，承接组件
/*
const addModules = ({match}) => 
        (
            <div className="add-module-wrapper">
                添加模块了
                    <Route path="/ee" component={detail}></Route> 
                <Route path={`${match.url}/ees`} component={detail}></Route>
            </div>
        )
export default addModules;
*/