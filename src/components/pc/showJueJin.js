import React, { Component } from 'react';
import {GetDataAPi} from '../../service/outerData'
import SelfHeader from './selfHeder'
import "../../scss/pcStyle/juejinList.scss"
class JueJinList extends Component {
    constructor () {
        super()
        this.state = {
            listData: []
        }
    }
    getListData () {
        GetDataAPi.getList({
          src: "web",
          before: "595950110943",
          limit: 20,
          category: "all"
        }).then(res => {
            if(res.data.code === 0) {
                this.setState({
                    listData: res.data.data.d.entrylist.slice()
                })
            }
        }).catch(err => {
          console.log(err)
        })
    }
    showArticleItem () {
        let article_html = this.state.listData.map((item, index) => (
            <div className="content-wrpper" key={index}>
                <a className="content-item" href={item.originalUrl}>
                    <p className="detail-info">
                        <span className="hot-falg art-item">热</span>
                        <span className="art-cloumn art-item">专栏</span>
                        <span className="art-name art-item">{item.user.username}</span>
                        <span className="art-time art-item">{item.createdAt}</span>
                        <span className="art-belong art-item">{item.category.name}</span>
                    </p>
                    <p className="art-title">{item.title}</p>
                    <p className="art-summary">{item.summaryInfo}</p>
                    <p className="art-follower">
                        <span className="art-agree agree-item">
                            <img alt="seeIcon"  className="img-flag" data-v-3b090438="" src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg"></img> 
                            {item.viewsCount}
                        </span>
                        <span className="art-disagree agree-item">
                            <img alt="viewIcon" className="img-flag" data-v-3b090438="" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"></img>
                            {item.commentsCount}
                        </span>
                    </p>
                </a>
            </div>
        ))
        return article_html
    }

    componentWillMount () {
        this.getListData()
    }
    render () {
        return (
            <div>
                <SelfHeader history={this.props.history} />
                <div className="list-wrapper">
                 {this.showArticleItem()}
                </div>
            </div>
        )
        
    }
}

export default JueJinList