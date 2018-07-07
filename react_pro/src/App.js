import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import {Route,BrowserRouter as Router,Switch } from "react-router-dom"
// import logo from './logo.svg';
import './scss/App.css';
import SelfHeader from './components/pc/selfHeder'
import ModuleParts from './components/pc/modulePart'
import PCAddModule from './components/pc/addModules'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* pc */}
        <MediaQuery query="(min-device-width: 1200px)">
          <SelfHeader/>
          <Router>
            <Switch >
              <Route exact path="/" component={ModuleParts}></Route>
              {/*添加*/}
              <Route path="/addModule" component={PCAddModule}></Route>
              {/*
              <Route path="/usercenter" component={PCUserCenter}></Route> */}
            </Switch >
          </Router>
        </MediaQuery>
        {/*mobile*/}
        <MediaQuery query="(max-device-width: 1200px)">
          <div>手机暂未开发</div>
        </MediaQuery>
      </div>
    );
  }
}
export default App;
