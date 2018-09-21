import React ,{Component} from 'react'
import article from '../../service/article'
import '../../scss/pcStyle/articleDetail.scss'
class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state ={
          articleDetail: {},
        }
    };
    componentDidMount () {
        const articleId = this.props.match.params.id
        this.getArticleItem(articleId)
    }
    // 获取文章详情
    getArticleItem (id) {
        article.getArticleItem({id: id}).then(res => {
            console.log(res)
            if (res.data.code === 0) {
                this.setState({articleDetail: res.data.result[0]})
            }
        }).catch(err => {
            console.log(err)
        })
    }

    render () {
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
                    右侧浮内容
                </section>
            </div>
        </div>
        )
    }
}
export default ArticleDetail