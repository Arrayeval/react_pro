import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import {Route,BrowserRouter as Router,Switch } from "react-router-dom"
// import logo from './logo.svg';
import './scss/App.css';
import SelfHeader from './components/pc/selfHeder'
import ModuleParts from './components/pc/modulePart'
import PCAddModule from './components/pc/addModules'
import AddArticle from './components/pc/addArticle'
import ArticleList from './components/pc/articleList'
import ReduxUse from './base/reduxUse'
import ReduxUse2 from './base/reduxUse2'

import PropTypes from 'prop-types';
class App extends Component {
  // 申明组件全局变量
  static childContextTypes ={
    themeColor: PropTypes.string
  }
  constructor () {
    super()
    this.state={
      themeColor:'red'
    }
  }
  // 组件全局变量赋值
  getChildContext () {
    return {
      themeColor: this.state.themeColor
    }
  }

  render() {
    return (
      <div className="App">
         {/* {React.Children.map(this.props.children,child=> <li>{child}</li>)} 
              类似于vue的slot
              详情参见：http://www.ruanyifeng.com/blog/2015/03/react.html */}
        {this.props.children}
        {/* pc端 */}
        <MediaQuery query="(min-device-width: 1200px)">
          {/* <SelfHeader/> */}
          <Router>
            <Switch >
              <Route exact path="/" component={ModuleParts}></Route>
              {/*添加模块*/}
              <Route path="/addModule" component={PCAddModule }></Route>
              {/*添加文章*/}
              <Route path="/addArticle" component={AddArticle}></Route>
              {/*文章列表*/}
              <Route path="/articleList" component={ArticleList}></Route>
              {/*redux的使用*/}
              <Route path="/reduxUse" component={ReduxUse}></Route>
              <Route path="/reduxUse2" component={ReduxUse2}></Route>
            </Switch >
          </Router>
        </MediaQuery>
        {/*mobile端*/}
        <MediaQuery query="(max-device-width: 1200px)">
          <div>手机暂未开发</div>
        </MediaQuery>
      </div>
    );
  }
}
export default App;
