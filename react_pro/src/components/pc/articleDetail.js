import React ,{Component} from 'react'
import article from '../../service/article'
import '../../scss/pcStyle/articleDetail.scss'
class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state ={
          articleArr: [],
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
                    <p className="article-title">文章标题</p>
                    <div className="article-word">文章内容。。。。。</div>
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