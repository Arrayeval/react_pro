import React ,{Component} from 'react'
import { Select} from 'antd'
import article from '../../service/article'
import {typeList} from '../../modles/congfig'
import '../../scss/pcStyle/articleList.scss'
class  articleList extends Component {
  constructor(props) {
    super(props)
    this.state ={
      articleArr: [],
      typeList: typeList
    }
  };
  // 初始化模块选择框
  initSelect () {
    const Option = Select.Option
    const options_html = typeList.map((item, index)=>(
      <Option value={item.name} key={index}>{item.key}</Option>
    ))
    return <div style={{ display:'inline-block'}}>
      <Select defaultValue='vue' style={{ width: 120, display:'inline-block'}} onChange={this.handleChangeModule.bind(this)}>
        {options_html}
      </Select>
      </div>
  }

  handleChangeModule (optionsType) {
    this.getArticleList(optionsType)
  }

  // 获取文章列表数据
  getArticleList (optionsType) {
    article.getArticleList({type:optionsType?optionsType: ''}).then(res => {
      if(res.data.code === 0 ) {
        this.setState({articleArr: res.data.data})
      }
    }).catch(err => {
      console.log(err)
    })
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
    if (articleArr.length <= 0){
      return 
    } else {
      return articleArr.map((item,index)=>(
       <tr key={index}>
        <td>
          <a className="link-top-line">{item.title}</a>
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
                <th>活动</th>
              </tr>
            </thead>
            <tbody className="self-body">
              {list_html}
            </tbody>
          </table>
        </section>
        
      </div>
    ) 
  }
}
export default articleList;