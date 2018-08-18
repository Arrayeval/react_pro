import React ,{Component} from 'react'
import BraftEditor from 'braft-editor'
// https://npm.taobao.org/package/braft-editor
import 'braft-editor/dist/braft.css'
import '../../scss/pcStyle/addArticle.scss'
import articles from '../../service/article'
import { Select, DatePicker} from 'antd'
// import Divider from 'antd/lib/divider';
const Option = Select.Option
class addArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
          title:'',  
          content: "",
          type:'lucy',
          author:'',
          shortDes:'',
          createTime:''
        }
    };

    // 生命周期函数
    componentDidMount () {
      //this.BraftEditor.setContent(`<h1>eee</h1>`)
      // this.refs.BraftEditor.setContent()
    };
    
    // 初始化模块选择框
    initSelect () {
      return <div>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChangeModule.bind(this)}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    }
    
    // 选择模块 
    handleChangeModule(value) {
      this.setState({type:value+ ''})
    }

    initEditior () {
      return {
        height: 400,
        contentFormat: 'html',
        initialContent: '<p>请输入文章内容（注意内容格式）...</p>',
       // onChange: this.handleChangeContent,
       // onRawChange: this.handleRawChange
      }
    }

    // 选择创建时间
    handleChangeTime = (date, dateString) => {
      this.setState({createTime:dateString})
    }
  
    // 重置，返回
    goBack = ()=> {
      this.props.history.push({pathname:'/',state:{...this.state}})
    }
    
    // 取值
    handelVal (event) {
      let _name = event.target.name
      let _obj = {};
      _obj[_name] = event.target.value
      this.setState({..._obj});
    }

    handelData () {
      this.setState({content: this.refs.BraftEditor.getContent()})
      articles.addArticle(this.state).then((res)=>{
        if (res.data.code === 0) {
          this.props.history.push({pathname:'articleList'})
        }
      }).catch(err=>{
        console.log(err)
      })
    }

    render () {
      // 文本编辑器初始化配置
      const editorProps = this.initEditior()
        return (
          <div style={{paddingTop:'100px'}}>
            <div className="add-article-part">
              <div className="add-item">
                <p className="item-lag">文章所属模块：</p>
                <div className="item-area">
                  {this.initSelect()}
                </div>
              </div>
              <div className="add-item">
                <p className="item-lag">添加文章标题：</p>
                <div className="item-area">
                  <input className="item-input"  name="title" onChange={this.handelVal.bind(this)}/>
                </div>
                <p className="item-lag">文章作者：</p>
                <div className="item-area">
                  <input className="item-input" name="author" onChange={this.handelVal.bind(this)}/>
                </div>
              </div>
              <div className="add-item">
                <p className="item-lag">文章简述：</p>
                <div className="item-area">
                  <textarea className="item-textarea" name="shortDes" onChange={this.handelVal.bind(this)} ></textarea>
                </div>
              </div>
              <div className="add-item">
                <p className="item-lag">添加文章内容：</p>
                <div className="item-area editor-box">
                  {/* ref={instance  => this.BraftEditor = instance } */}
                  <BraftEditor ref="BraftEditor"  {...editorProps}/>
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
                  <button className="actionBtn" onClick={this.handelData.bind(this)}>提交</button>
                  <button className="actionBtn cancelBtn"  onClick={this.goBack.bind(this)}>重置</button>
                </div>
              </div>
            </div>
          </div>
        )
    } 
}

export default addArticle;