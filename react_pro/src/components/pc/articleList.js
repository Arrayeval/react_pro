import React ,{Component} from 'react'
import { Select} from 'antd'
import '../../scss/pcStyle/articleList.scss'

class  articleList extends Component {
  constructor(props) {
    super(props)
    this.state ={

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


  render () {
    const initSelect = this.initSelect()
    return (
      <div className="article-list-box">
        <section className="classify-item">
         {initSelect}
         <span className="new-last">最新</span>
         <span className="classify-hover-btn">最新</span>
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>主题</th>
                <th>分类</th>
                <th>用户</th>
                <th>浏览</th>
                <th>活动</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="link-top-line">这里填写文章的title</span>
                  <div className="content-des">
                    这里写文章的简介内容
                  </div>
                </td>
                <td>
                  {/* http://react-china.org/latest */}
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