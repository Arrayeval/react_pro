import React ,{Component} from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
import '../../scss/pcStyle/addArticle.scss'
import { Select, DatePicker} from 'antd'
import Divider from 'antd/lib/divider';
const Option = Select.Option
class addArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
          content: "",
          
        }
    };

    // 生命周期函数
    componentDidMount () {
      // this.initEditor()
    };
    
    // 初始化模块选择框
    initSelect () {
      return <div>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChangeModule}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    }
    
    // 选择模块 
    handleChangeModule(value) {
      console.log(`selected ${value}`);
    }

    // 编辑文章内容
    handleChangeContent = (content) => {
      console.log(content)
    }
    
    handleRawChange = (rawContent) => {
      console.log(rawContent)
    }

    initEditior () {
      return {
        height: 400,
        contentFormat: 'html',
        initialContent: '<p>请输入文章内容...</p>',
        onChange: this.handleChangeContent,
        onRawChange: this.handleRawChange
      }
    }

    // 选择创建时间
    handleChangeTime = (date, dateString) => {
      this.setState({time_date:dateString})
    }
  
    // 重置，返回
    goBack = ()=> {
      this.props.history.push({pathname:'/',state:{...this.state}})
    }

    render () {
      // 文本编辑器初始化配置
      const editorProps = this.initEditior()
        return (
          <div style={{paddingTop:'100px'}}>
            <div className="add-article-part">
              <div className="add-item">
                <p className="item-lag">选择文章所属模块：</p>
                <div className="item-area">
                  {this.initSelect()}
                </div>
              </div>
              <div className="add-item">
                <p className="item-lag">添加文章标题：</p>
                <div className="item-area">
                  <input className="item-input"/>
                </div>
                <p className="item-lag">文章作者：</p>
                <div className="item-area">
                  <input className="item-input"/>
                </div>
              </div>
              <div className="add-item">
                <p className="item-lag">添加文章内容：</p>
                <div className="item-area editor-box">
                  <BraftEditor {...editorProps}/>
                </div>
              </div>
              <div className="add-item">
                <p className="item-lag">添加时间：</p>
                  <div className="item-area">
                  <DatePicker 
                      format="YYYY-MM-DD HH:mm:ss"
                      onChange={this.handleChangeTime.bind(this,)}
                      placeholder="创建时间..."/>
                  </div>
              </div>
              <div className="add-item">
                <div className="btn-wrapper">
                  <button className="actionBtn">提交</button>
                  <button className="actionBtn cancelBtn"  onClick={this.goBack}>重置</button>
                </div>
              </div>
            </div>
            
          </div>
        )
    } 
}

export default addArticle;