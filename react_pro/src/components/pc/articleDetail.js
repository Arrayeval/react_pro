import React ,{Component} from 'react'
import article from '../../service/article'
import '../../scss/pcStyle/articleDetail.scss'
class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state ={
          articleDetail: {},
          articleList: [],
          searchKeyWord: ''
        }
    };
    componentDidMount () {
        const articleId = this.props.match.params.id
        this.getArticleItem(articleId)
        this.getSpecialArticleList({keyWord: this.state.searchKeyWord})
    }
    // 获取文章详情
    getArticleItem (id) {
        article.getArticleItem({id: id}).then(res => {
            if (res.data.code === 0) {
                this.setState({articleDetail: res.data.result[0]})
            }
        }).catch(err => {
            console.log(err)
        })
    }

    // 获取最近文章(只支持“文章title，作者检索”，或者默认最近一周文章展示)
    getSpecialArticleList = (obj) => {
        if (obj.keyWord === undefined && obj.searchTime === undefined) {
            return
        }
        article.getSpecialArticleList({keyWord: obj.keyWord, searchTimer: obj.searchTime }).then(res => {
            if (res.data.code === 0) {
                this.setState({articleList: res.data.data})
            }
        }).catch(err => {
            console.log(err)
        })
    }

    // CreateAsideArticleList
    createAsideArticleList (arr) {
        if (arr && arr.length <= 0) {
            return 
        }
        const article_list_html = arr.map((item, index) => (
            <li className="article-item" onClick={this.goViewArticleItem.bind(this, {id: item.id})} key={index}>
                <span className="item-lag">{index}</span>
                <div className="item-info">  
                    <span className="item-short">{item.title}</span>
                    <div  className="item-show">
                        <span className="author-name">作者：{item.author}</span>
                        <span className="time-mark">时间：{item.createTime}</span>
                    </div>
                </div>
            </li>
        ))
        return  <ul className="new-article-list">
            {article_list_html}
        </ul>
    }

    // 查看文章详情
    goViewArticleItem = (obj) => {
        // this.props.history.push({pathname:'/'})
        this.getArticleItem(obj.id)
    }

    handelVal (event) {
        let _name = event.target.name
       //  let _obj = {};
        // _obj[_name] = event.target.value
        this.setState({searchKeyWord: event.target.value});
    }

    render () {
        const asideArticleListHtml = this.createAsideArticleList(this.state.articleList)
        return (
        <div className="article-detail-wrapper">
            <div className="article-main-box">
                {/* <ul className="left-progress">
                    <li className="progress-item">title1</li>
                    <li className="progress-item">title2</li>
                    <li className="progress-item">title3</li>
                    <li className="progress-item">title4</li>
                </ul> */}
                <section className="article-content">
                    <p className="article-title">{this.state.articleDetail.title}</p>
                    <ul className="item-wrapper">
                        <li className="item-tag">
                            <span className="item-title"> 时间：</span>
                            <span className="item-content"> {this.state.articleDetail.createTime} </span>
                        </li>
                        <li className="item-tag">
                            <span className="item-title">关于：</span>
                            <span className="item-content">{this.state.articleDetail.type}</span>
                        </li>
                        <li className="item-tag">
                            <span className="item-title">作者：</span>
                            <span className="item-content">{this.state.articleDetail.author}</span>
                        </li>
                    </ul>
                    <div className="article-word" dangerouslySetInnerHTML={{__html:this.state.articleDetail.content}}></div>
                </section>
                <section className="right-aside-wrapper">
                   <div className="aside-wrapper">
                        <p className="input-box">
                            <input className="input-select" placeholder="输入文章类型，或者作者名..." name="searchKeyWord" onChange={this.handelVal.bind(this)}/>
                            <span className="btn-search" onClick={this.getSpecialArticleList.bind(this, {keyWord: this.state.searchKeyWord})}>点击搜索</span>
                        </p>
                        {this.createAsideArticleList(this.state.articleList)}
                        {/* <ul className="new-article-list">
                            <li className="article-item" onClick={this.goViewArticleItem.bind(this)}>
                                <span className="item-lag">01</span>
                                <div className="item-info">  
                                    <span className="item-short">这是一篇很好看的文章....</span>
                                    <div  className="item-show">
                                        <span className="author-name">作者：Evel</span>
                                        <span className="time-mark">时间：2018-05-51</span>
                                    </div>
                                </div>
                            </li>
                        </ul> */}
                   </div>
                </section>
            </div>
        </div>
        )
    }
}
export default ArticleDetail