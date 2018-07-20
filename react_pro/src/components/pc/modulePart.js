//  首页模块
 import React, {Component} from 'react'
 import '../../scss/pcStyle/modulePart.scss'
 import {Route,BrowserRouter as Router,Switch } from "react-router-dom"
 import PCAddModule from '../../components/pc/addModules'
 class moduleParts extends Component {
   constructor(props) {
    super(props),
    this.state={
      mark:'我从modulePart来'
    }
   }
   /*跳转添加模块页面*/
  addModule ()  {
    this.props.history.push({pathname:'addModule',state:{...this.state}})
  }

  /*添加文章*/
  addArticle () {
    this.props.history.push({pathname:'addArticle',state:{...this.state}})
  } 
   render () {
    return (
      <div className="module-part-wrapper">
        <div className="config-wrapper">
          <div className="config-area">
            <span className="add-btn inline-block cursor-pointer"  onClick={this.addModule.bind(this)}>+ Add</span>
            <span className="login-out-area">
              <span className="change-item"> </span>
              <span className="change-item"></span>
              <span className="login-out-item">安全退出</span>
            </span>
          </div>
        </div>
        <div className="module-part-content">
          <button className="btn delete-btn">删除</button>
          <button className="btn choice-btn">选择</button>
        </div>
        <div className="module-wrapepr">
          <div className="module-part">
            <p className="title">
              <span className="logoIcon"></span>
              <span className="module-name"> 学分管理</span> 
            </p>
            <div className="content-icon"> 
              {/* <img /> */}
            </div>
            <div className="action-area">
              <span className="item" onClick={this.addArticle.bind(this)}>添加</span>
              <span className="item">编辑</span>
            </div>
          </div>
          <div className="module-part">
            
          </div>
          <div className="module-part">
            
          </div>
        </div> 
      </div>
    )
   }
 }
 export default moduleParts;