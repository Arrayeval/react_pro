import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import {Route,BrowserRouter as Router,Switch } from "react-router-dom"
// import logo from './logo.svg';
import './scss/App.css';

import ModuleParts from './components/pc/modulePart'
import PCAddModule from './components/pc/addModules'
import AddArticle from './components/pc/addArticle'
import ArticleList from './components/pc/articleList'
import ArticleDetail from './components/pc/articleDetail'
import StockInfo from './components/pc/stockInfo'
import Communication from './components/pc/communication'
import ShowJueJin from './components/pc/showJueJin'
import UserLogin from './components/pc/login'
import ReduxUse from './base/reduxUse'
import ReduxUse2 from './base/reduxUse2'
// import ReduxSaga from './base/redux.saga.use'

import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from './redux/store'
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
      <Provider store={store}>
        <div className="App">
          {/* {React.Children.map(this.props.children,child=> <li>{child}</li>)} 
                类似于vue的slot
                详情参见：http://www.ruanyifeng.com/blog/2015/03/react.html */}
          {this.props.children} {/*组件内部的东西*/}
          {/* pc端 */}
          <MediaQuery query="(min-device-width: 1200px)">
            <Router>
              <Switch >
                {/*掘金数据展示*/}
                <Route path="/ShowJueJin" component={ShowJueJin}></Route>
                <Route path="/ModuleParts" component={ModuleParts}></Route>
                {/*添加模块*/}
                <Route path="/addModule" component={PCAddModule }></Route>
                {/*股票信息*/}
                <Route path="/stockInfo" component={StockInfo }></Route>
                {/*聊天室*/}
                <Route path="/communication" component={Communication }></Route>
                {/*添加文章*/}
                <Route path="/addArticle" component={AddArticle}></Route>
                {/*文章列表*/}
                <Route path="/articleList" component={ArticleList}></Route>
                {/*文章内容详情*/}
                <Route path="/articleDetail/:id" component={ArticleDetail}></Route>
                {/*redux的使用*/}
                <Route path="/ReduxUse" component={ReduxUse}></Route>
                <Route path="/ReduxUse2" component={ReduxUse2}></Route>
                {/* <Route path="/ReduxSaga" component={ReduxSaga}></Route> */}
                {/*用户登陆*/}
                <Route exact path="/" component={UserLogin}></Route>
              </Switch >
            </Router>
          </MediaQuery>
          {/*mobile端*/}
          <MediaQuery query="(max-device-width: 1200px)">
            <div>手机暂未开发</div>
          </MediaQuery>
        </div>
      </Provider>
    );
  }
}
export default App;
