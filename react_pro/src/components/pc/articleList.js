import React ,{Component} from 'react'
import {Link } from "react-router-dom"
import { Select} from 'antd'
import article from '../../service/article'
import {typeList} from '../../modles/congfig'
import InfiniteScroll from 'react-infinite-scroller'
import '../../scss/pcStyle/articleList.scss'
class  articleList extends Component {
  constructor(props) {
    super(props)
    this.state ={
      articleArr: [],
      typeList: typeList,
      timer: null,
      hasMore: true,
      pageStart: 0,
      optionsType: ''
    }
  };
  // 初始化模块选择框
  initSelect () {
    const Option = Select.Option
    const options_html = typeList.map((item, index)=>(
      <Option value={item.name} key={index}>{item.name}</Option>
    ))
    return <div style={{ display:'inline-block'}}>
      <Select defaultValue='全部' style={{ width: 120, display:'inline-block'}} onChange={this.handleChangeModule.bind(this)}>
        {options_html}
      </Select>
      </div>
  }

  handleChangeModule (optionsType) {
    if (optionsType === '全部') {
      optionsType = ''
    }
    // 每一次切换tab,需要重新设置hasMore
    this.setState({hasMore: true})
    this.setState({articleArr: []})
    this.setState({pageStart: 0})
    this.setState({optionsType: optionsType})
    this.getArticleList(this.state.pageStart)
  }

  // 获取文章列表数据
  getArticleList (pageStart = 0) {
    if (this.state.timer) {
      return
    }
    this.state.timer = setTimeout(() => {
      article.getArticleList({type: this.state.optionsType, pageStart: pageStart}).then(res => {
        this.state.timer = null
        if(res.data.code === 0  && res.data.data.length　> 0) {
          this.setState((prevState) => { // state的更新是异步的
            return { articleArr: prevState.articleArr.concat(res.data.data) } // 上一个 setState 
          })
        } 
        if (res.data.data.length === 0) {
          // 没有更多的数据
          this.setState({hasMore: false})
        }
      }).catch(err => {
        console.log(err)
      })
    }, 500)
   
  }

  getLastNews(newLast) {
    let timer = new Date()
    console.log(timer.getDate())
   // this.getArticleList()
  }

  componentWillMount () {
    this.getArticleList()
  }

  createHtml (articleArr) {
    if (articleArr.length > 0){
        return articleArr.map((item,index)=>(
         <tr key={index}>
          <td>
            <Link to={`articleDetail/${item.id}`} className="link-top-line">{item.title}</Link>
            {/* <a className="link-top-line">{item.title}</a> */}
            <div className="content-des">
             {item.shortDes}
            </div>
          </td>
          <td>
            <span className="type-item-lag">{item.type}</span>
          </td>
          <td>
            <span className="type-item-lag item-name">{item.author}</span>
          </td>
          <td>
            <span className="type-item-lag item-view">{item.id}</span>
          </td>
          <td>
            <span className="type-item-lag item-day">{item.createTime}</span>
          </td>
        </tr>
        ))
    } else {
      return <tr className="no-data">
        <td colSpan="5">
          <div className= "img-wrapper"><img  alt="nodata" src={require('../../assets/no-data.svg')}/></div>
        </td>
      </tr>
    }
  }

  render () {
    const initSelect = this.initSelect()
    const list_html = this.createHtml(this.state.articleArr)
    return (
      <div className="article-list-box">
        <section className="classify-item">
         {initSelect}
         <span className="new-last">最新 </span>
         <span className="classify-hover-btn" onClick={this.getLastNews.bind(this,'newLast')}>最新</span>
        </section>
        <section className="self-part">
          <table>
            <thead className="self-header">
              <tr>
                <th>主题</th>
                <th>分类</th>
                <th>用户</th>
                <th>浏览</th>
                <th>活动{this.state.hasMore}</th>
              </tr>
            </thead>
             
              <InfiniteScroll  
              className="self-body"
              element="tbody"
              pageStart = {this.state.pageStart}
              loadMore = {this.getArticleList.bind(this)}
              hasMore = {this.state.hasMore}
              threshold={250}
              useWindow={false}
              loader = {<tr key={0}><td colSpan="5" style={{ textAlign:'center'}}>loading.... </td></tr>}
              >
              {list_html}
              </InfiniteScroll>
            
          </table>
        </section>
        
      </div>
    ) 
  }
}
export default articleList;