import React ,{Component} from 'react'
import { Upload, Icon, Modal } from 'antd';

class PicturesWall extends Component {
  constructor(props){
    super(props)
    this.state=  {
      previewVisible: false,
      previewImage: '',
      fileList: [],
      /*
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
      */
    };
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {
    this.setState({ fileList })
    // 回调父组件方法
    this.props.handleFile (fileList) 
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    var uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          accept="png,jpg,svg"                              // 图类型
          action={this.props.actionUrl}                     // 上传文件地址
          listType="picture-card"                           // 上传列表的内联样式
          fileList={fileList}                               // 已经上文件列表
          multiple={true}                                   // 支持多文件上传
          onPreview={this.handlePreview}                    //  点击链接或者图片的回调
          onChange={this.handleChange}                      // 上传文件改变时的状态
          >  
          {fileList.length >= this.props.fileCount? null :  uploadButton}                                          
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;