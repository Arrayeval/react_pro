import React ,{Component} from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'
class addArticle extends Component {
    constructor(props){
        super(props)
        console.log(props);
        this.state = {
          content: "",
          
        }
    };
    componentDidMount () {
      // this.initEditor()
    };
    handleChange = (content) => {
      console.log(content)
    }
  
    handleRawChange = (rawContent) => {
      console.log(rawContent)
    }
    render () {
      const editorProps = {
        height: 500,
        contentFormat: 'html',
        initialContent: '<p>Hello World!</p>',
        onChange: this.handleChange,
        onRawChange: this.handleRawChange
      }
        return (
          <div style={{paddingTop:'200px'}}>
             <BraftEditor {...editorProps}/>
          </div>
        )
    } 
}

export default addArticle;