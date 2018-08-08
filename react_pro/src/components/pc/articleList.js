import React ,{Component} from 'react'
import { Select} from 'antd'
import article from '../../service/article'

import '../../scss/pcStyle/articleList.scss'
class  articleList extends Component {
  constructor(props) {
    super(props)
    this.state ={
      articleArr: []
    }
  };
  // 初始化模块选择框
  initSelect () {
    const Option = Select.Option
    return <div style={{ display:'inline-block'}}>
      <Select defaultValue="lucy" style={{ width: 120, display:'inline-block'}} onChange={this.handleChangeModule.bind(this)}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>Disabled</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      </div>
  }

  handleChangeModule (value) {
    console.log(value)
  }

  // 获取文章列表数据
  getArticleList () {
    article.getArticleList().then(res => {
      if(res.data.code === 0 ) {
        this.setState({articleArr: res.data.data})
      }
    }).catch(err => {
      console.log(err)
    })
  }

  componentWillMount () {
    this.getArticleList()
  }

  render () {
    const initSelect = this.initSelect()
    console.log(this.state.articleArr)
    return (
      <div className="article-list-box">
        <section className="classify-item">
         {initSelect}
         <span className="new-last">最新 </span>
         <span className="classify-hover-btn">最新</span>
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
              <tr>
                <td>
                  <a className="link-top-line">这里填写文章的title</a>
                  <div className="content-des">
                  w3ctech除了为大家组织了Web标准化交流会、走进名企、拥抱HTML5、JavaScript专题会议、Mobile专题会议之外，最近几年联合W3C中国及前端圈为大家推出了CSS大会、FEDAY、VueConf三个会议。 随着技术的不断发展与变化，在我们的日常工作中，除了使用最基本的HTML,CSS,JS之外，在很多公司，像Vue.js,React.js也变成了不可或缺的，所以大家也可以从现在的招聘要求上面从原来对HTML、CSS… 阅读更多
                  </div>
                </td>
                <td>
                  <span className="type-item-lag">ee</span>
                  <span className="type-item-lag">ee</span>
                  <span className="type-item-lag">ee</span>
                </td>
                <td>
                  <span className="type-item-lag item-name">evel</span>
                </td>
                <td>
                  <span className="type-item-lag item-view">11</span>
                </td>
                <td>
                  <span className="type-item-lag item-day">11天前</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="link-top-line">这里填写文章的title</a>
                  <div className="content-des">
                  </div>
                </td>
                <td>
                  <span className="type-item-lag">ee</span>
                  <span className="type-item-lag">ee</span>
                  <span className="type-item-lag">ee</span>
                </td>
                <td>
                  <span className="type-item-lag item-name">evel</span>
                </td>
                <td>
                  <span className="type-item-lag item-view">11</span>
                </td>
                <td>
                  <span className="type-item-lag item-day">11天前</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="link-top-line">这里填写文章的title</a>
                  <div className="content-des">
                  </div>
                </td>
                <td>
                  <span className="type-item-lag">ee</span>
                  <span className="type-item-lag">ee</span>
                  <span className="type-item-lag">ee</span>
                </td>
                <td>
                  <span className="type-item-lag item-name">evel</span>
                </td>
                <td>
                  <span className="type-item-lag item-view">11</span>
                </td>
                <td>
                  <span className="type-item-lag item-day">11天前</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a className="link-top-line">这里填写文章的title</a>
                  <div className="content-des">
                  </div>
                </td>
                <td>
                  <span className="type-item-lag">ee</span>
                  <span className="type-item-lag">ee</span>
                  <span className="type-item-lag">ee</span>
                </td>
                <td>
                  <span className="type-item-lag item-name">evel</span>
                </td>
                <td>
                  <span className="type-item-lag item-view">11</span>
                </td>
                <td>
                  <span className="type-item-lag item-day">11天前</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        
      </div>
    ) 
  }
}
export default articleList;