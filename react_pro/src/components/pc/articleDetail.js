import React ,{Component} from 'react'
import '../../scss/pcStyle/articleDetail.scss'
class ArticleDetail extends Component {
    constructor(props) {
        super(props)
        this.state ={
          articleArr: [],
        }
    };
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
                <section classs="article-content">
                    <p className="article-title">文章标题</p>
                    <div className="article-word">文章内容。。。。。</div>
                </section>
                <section class="right-aside-wrapper">
                    左侧浮内容
                </section>
            </div>
        </div>
        )
    }
}
export default ArticleDetail