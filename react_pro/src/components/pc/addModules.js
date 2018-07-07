import React ,{Component} from 'react'

import '../../scss/pcStyle/addModules.scss'
import {Route,BrowserRouter as Router,Switch,Link } from "react-router-dom"
import detail from '../../components/pc/detail'
import { DatePicker } from 'antd'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker
class addModules extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state= {
            mark:'我从addModules中来',
            startValue: new Date()
        }
    };
    onChange (date, dateString) {
        console.log(date, dateString);
    }
    render () {
        return (
            <div className="add-module-wrapper">
            <p className="route-wrapper">
              <Link to='/' className="back-btn" tag="button">back</Link>
            </p>
            <div className="module-form">
             <p className="item-form">
                <label className="self-lebal">模块名：</label>
                <input type="text" placeholder="请输入文章标题" className="self-input"/>
             </p>
             <p className="item-form"> 
                <label className="self-lebal textarea-lebal">简单描述：</label>
                <textarea type="text" placeholder="随便写写这模块是干什么的..." className="self-textarea"></textarea>
             </p>
            
             <p className="item-form">
                <label className="self-lebal">创建时间：</label>
                {/* <input type="text" placeholder="请输入文章标题" className="self-input"/> */}
                <DatePicker onChange={this.onChange.bind(this)}  
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="创建时间..."/>
             </p>
             <p className="item-form">
                <label className="self-lebal">创建作者：</label>
                <input type="text" placeholder="我们需要一个作者" className="self-input"/>
             </p>
             <p className="item-form">
                <label className="self-lebal">模块logo：</label>
                <span className="add-btn vertical-top"></span>
                {/* <input type="text" placeholder="请输入文章标题" className="self-input"/> */}
             </p>
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

export default addModules;

// const addModules = ({match}) => 
//          (
//             <div className="add-module-wrapper">
//                 添加模块了
//                 {/* <Route path="/ee" component={detail}></Route> */}
//                 <Route path={`${match.url}/ees`} component={detail}></Route>
//             </div>
//         )
    
// export default addModules;